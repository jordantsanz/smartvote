import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateAddress } from '../actions';

class MapPage extends Component {
  componentDidMount() {
    this.findLocation();
  }

  findLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(((position) => {
        this.props.calculateAddress(position.coords.latitude, position.coords.longitude);
      }));
    } else {
      console.log('none');
    }
  }

  renderAddress = () => {
    if (this.props.location.address === null || this.props.location.address === undefined) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div className="address">{this.props.location.address}</div>
      );
    }
  }
}
function mapStateToProps(reduxState) {
  return {
    location: reduxState.location,
  };
}
export default connect(mapStateToProps, { calculateAddress })(MapPage);
