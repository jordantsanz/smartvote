import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateAddress } from '../actions';

class AddressFinderScreen extends Component {
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
        <div className="page-wrapper" id="page-1">
          <h1 className="title" id="page-1-title">Let&apos;s get started!</h1>
          <button onClick={this.findLocation} className="button" type="button" id="find-your-address-button">Find my elections</button>
          <h2 className="button-subtitle">Or enter your address</h2>
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
