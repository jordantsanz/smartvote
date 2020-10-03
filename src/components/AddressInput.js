import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { calculateAddress } from '../actions';

class AddressInput extends Component {
    findLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(((position) => {
          this.props.calculateAddress(position.coords.latitude, position.coords.longitude, this.props.history);
        }));
      } else {
        console.log('none');
      }
    }

    render() {
      return (
        <div className="page-wrapper" id="page-3">
          <h1 className="title" id="page-3-title">Enter your address.</h1>
          <input className="input" id="input-address" />
          <NavLink to="/AddressDisplay">
            <button type="button" className="button" id="continue" onClick={this.findLocation}>Continue</button>
          </NavLink>
        </div>
      );
    }
}

function mapStateToProps(reduxState) {
  return {
    location: reduxState.location,
  };
}

export default connect(mapStateToProps, { calculateAddress })(AddressInput);
