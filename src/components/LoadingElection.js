/* eslint-disable eqeqeq */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { queryElectionData } from '../actions';

class LoadingElection extends Component {
  render() {
    if (this.props.electionData.length == 0 || this.props.electionData == undefined) {
      return (
        <div className="page-wrapper" id="page-4">
          <div className="main-page-holder" id="page-4-holder">
            <h1 className="title" id="page-4-title"> Finding your elections... </h1>
            <button type="button" className="button-red">I love democracy!</button>
          </div>
        </div>
      );
    } else {
      return (
        <Redirect to="/elections" />
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
export default connect(mapStateToProps, queryElectionData)(LoadingElection);
