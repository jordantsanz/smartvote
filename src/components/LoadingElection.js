/* eslint-disable eqeqeq */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import video from '../images/votermag_h264.mp4';

class LoadingElection extends Component {
  render() {
    if (this.props.electionData.length == 0 || this.props.electionData == undefined) {
      return (
        <div className="page-wrapper" id="page-4">

          <div className="special-main-page-holder" id="page-4-holder">
            <video className="videoWhite" width="320" height="240" loop autoPlay muted id="video">
              <source src={video} className="videoWhite" type="video/mp4" />
            </video>
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
export default connect(mapStateToProps, null)(LoadingElection);
