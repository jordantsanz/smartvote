/* eslint-disable eqeqeq */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { calculateAddress, queryElectionData } from '../actions';

class AddressDisplay extends Component {
    findElectionData = () => {
      const addressList = this.props.location.address_components;
      let component,
        streetnum,
        streetname,
        city,
        state,
        niceAddress;
      for (component of addressList) {
        switch (component.types[0]) {
          case 'street_number':
            streetnum = component.short_name;
            break;
          case 'route':
            streetname = `${component.short_name}.`;
            break;
          case 'locality':
            city = component.short_name;
            break;
          case 'administrative_area_level_1':
            state = component.short_name;
            break;
          default:
            break;
        }
        niceAddress = `${streetnum} ${streetname} ${city} ${state}`;
      }

      const electionData = this.props.queryElectionData(niceAddress);
      console.log(electionData);
    };

    render() {
      if (this.props.location != null || this.props.location != undefined || this.props.location != '') {
        return (
          <div className="page-wrapper" id="page-2">
            <h1 className="title" id="page-2-title">Is this you?</h1>
            <h2 className="subtitle" id="formatted-address">{this.props.location.address}</h2>
            <div className="button-holders">
              <NavLink to="/addressinput">
                <button type="button" className="button" id="no-not-me">No, not me</button>
              </NavLink>
              <NavLink to="/loading">
                <button type="button" className="button" id="yes-thats-me" onClick={this.findElectionData}>Yes, that&apos;s me!</button>
              </NavLink>
            </div>
          </div>
        );
      } else {
        return (
          <div className="page-wrapper">
            <h1 className="title">No address found. Try again!</h1>
            <Redirect to="/addressinput" />
          </div>
        );
      }
    }
}

function mapStateToProps(reduxState) {
  return {
    // address: reduxState.address,
    electionData: reduxState.electionData.contests,
    location: reduxState.location,
  };
}

export default connect(mapStateToProps, { queryElectionData, calculateAddress })(AddressDisplay);
