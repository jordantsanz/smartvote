/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable eqeqeq */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setRecommendations } from '../actions';
import video from '../images/switcheroo_h264.mp4';

const results = {
  elections: [
    {
      candidates: [
        {
          profile: {
            needs_score: 50,
            values_score: 80,
            average_score: 98,
          },
          name: 'Sathvi',
        },
        {
          profile: {
            needs_score: 98,
            values_score: 20,
            average_score: 2,
          },
          name: 'Catherine',
        },
      ],
      office: 'US Senate',
    },

    {
      candidates: [
        {
          profile: {
            needs_score: 50,
            values_score: 80,
            average_score: 98,
          },
          name: 'John Cornyn',
        },
        {
          profile: {
            needs_score: 98,
            values_score: 20,
            average_score: 2,
          },
          name: 'MJ Hegar',
        },
      ],
      office: 'Railroad Convention',
    },
  ],
};

class LoadingFinal extends Component {
  findMaxes = () => {
    const elections = this.props.results;
    const electionsNew = [];
    console.log(elections);
    for (const election of elections.elections) {
      let maxScore = 0;
      let maxName = '';

      for (const candidate of election.candidates) {
        if (candidate.profile.average_score > maxScore) {
          maxScore = candidate.profile.average_score;
          maxName = candidate.name;
        }
      }
      election.recommendation = maxName;
      electionsNew.push(election);
    }
    const resultsNew = { elections: electionsNew };
    this.props.setRecommendations(resultsNew);
  }

  render() {
    if (this.props.results.length == 0 || this.props.results == undefined) {
      return (
        <div className="page-wrapper" id="page-4">
          <video width="320" height="240" loop autoPlay muted id="video">
            <source src={video} type="video/mp4" />
          </video>
          <h1 className="title" id="page-4-title"> Finding your election... </h1>
        </div>
      );
    } else if (this.props.newResults.length == 0 || this.props.newResults == undefined) {
      return (
        <div className="page-wrapper" id="page-4">
          <h1 className="title" id="page-4-title"> Finding your election... </h1>
        </div>
      );
    } else {
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
    results,
    newResults: reduxState.results,
  };
}
export default connect(mapStateToProps, { setRecommendations })(LoadingFinal);
