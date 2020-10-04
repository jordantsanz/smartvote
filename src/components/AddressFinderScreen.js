import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { calculateAddress } from '../actions';

class AddressFinderScreen extends Component {
    findLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(((position) => {
          console.log(position.coords.latitude, position.coords.longitude);
          this.props.calculateAddress(position.coords.latitude, position.coords.longitude, this.props.history);
        }));
      } else {
        console.log('none');
      }
    }

    render() {
      return (
        <div className="page-wrapper" id="page-1">
          <div className="main-page-holder">
            <h1 className="title" id="page-1-title">Let&apos;s check out your elections.</h1>
            <button onClick={this.findLocation} className="button-red" type="button" id="find-your-address-button">Find my district</button>
            <NavLink to="/addressinput" className="link">
              <h2 className="button-subtitle">Or enter in your address manually</h2>
            </NavLink>
          </div>
        </div>
      );
    }
}
function mapStateToProps(reduxState) {
  return {
    location: reduxState.location,
  };
}

export default connect(mapStateToProps, { calculateAddress })(AddressFinderScreen);
