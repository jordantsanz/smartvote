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
  const address = this.findAddress();
  console.log(address);
  // const electionData = this.props.queryElectionData(address);
  // console.log(electionData);
};

render() {
  return (
    <div className="home-page-wrapper">
      <button type="button" className="query-elections" onClick={this.findElectionData}> Query elections </button>
      <RenderedElectionData electionData={this.props.electionData} />
    </div>
  );
}
}

function mapStateToProps(reduxState) {
  return {
    // address: reduxState.address,
    electionData: reduxState.electionData.contests,
  };
}
export default connect(mapStateToProps, { queryElectionData, calculateAddress })(Home);
