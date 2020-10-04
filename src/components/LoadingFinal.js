/* eslint-disable eqeqeq */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { queryElectionData } from '../actions';

class LoadingFinal extends Component {
  render() {
    if (this.props.results.length == 0 || this.props.results == undefined) {
      return (
        <div className="page-wrapper" id="page-4">
          <h1 className="title" id="page-4-title"> Finding your election... </h1>
        </div>
      );
    } else {
      setTimeout(5000);
      return (
        <Redirect to="/results" />
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    // address: reduxState.address,
    electionData: reduxState.electionData.contests,
    location: reduxState.location, // WILL REPLACE THIS WITH PERSONALTY
    results: ['hello'],
  };
}
export default connect(mapStateToProps, queryElectionData)(LoadingFinal);
