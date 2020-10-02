/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryElectionData, calculateAddress } from '../actions';
import RenderedElectionData from './RenderedElectionData';

class Home extends Component {
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

findAddress = () => {
  console.log('none');
}

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

render() {
  return (
    <div className="home-page-wrapper">
      <button type="button" className="query-elections" onClick={this.findElectionData}> Query elections </button>
      <RenderedElectionData electionData={this.props.electionData} />
      {this.renderAddress()}
    </div>
  );
}
}

function mapStateToProps(reduxState) {
  return {
    // address: reduxState.address,
    electionData: reduxState.electionData.contests,
    location: reduxState.location,
  };
}
export default connect(mapStateToProps, { queryElectionData, calculateAddress })(Home);
