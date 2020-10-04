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
  constructor(props) {
    super(props);
    this.state = {
      render: false, // Set render state to false
    };
  }

  componentDidMount() {
    setTimeout(() => { // Start the timer
      this.setState({ render: true }); // After 1 second, set render to true
    }, 4000);
  }

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
    if (!this.state.render) {
      return (
        <div className="page-wrapper" id="page-4">

          <div className="special-main-page-holder" id="page-4-holder">
            <video className="videoWhite" width="320" height="240" loop autoPlay muted id="video">
              <source src={video} className="videoWhite" type="video/mp4" />
            </video>
            <h1 className="title" id="page-4-title"> Generating recommendations... </h1>
            <button type="button" id="democracy" className="button-red">I love democracy!</button>
          </div>
        </div>
      );
    } else if (this.props.newResults.length != 0 || this.props.newResults != undefined) {
      return (
        <Redirect to="/results" />
      );
    } else {
      return (
        <div className="page-wrapper" id="page-4">

          <div className="special-main-page-holder" id="page-4-holder">
            <video className="videoWhite" width="320" height="240" loop autoPlay muted id="video">
              <source src={video} className="videoWhite" type="video/mp4" />
            </video>
            <h1 className="title" id="page-4-title"> Generating recommendations... </h1>
            <button type="button" id="democracy" className="button-red">I love democracy!</button>
          </div>
        </div>
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
