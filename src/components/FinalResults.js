import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ElectionCard from './ElectionCard';

class FinalResults extends Component {
    finalResults = () => {
      const candidate = {
        name: 'Wylie',
        party: 'Republican',
      };
      const result = {
        office: 'President of Nothing',
        recommendation: 'Wylie',
        candidates: [candidate],
        values: ['being a bad bitch', 'tiktok'],
      };
      const personalityData = [result]; // this will be props of personalityData passed through redux
      return personalityData.map((election) => {
        return (
          <ElectionCard election={election} />
        );
      });
    }

    render() {
      return (
        <div className="page-wrapper" id="page-8">
          <div className="main-page-holder" id="double-height">
            <div className="page-starter">
              <h1 className="title" id="page-8-title">Your recommendations are ready!</h1>
              <div className="red-arrow" />
            </div>
          </div>
          <div className="page-recommendations">
            <div className="main-page-holder">
              <h1 id="page-9-title">Here are your recommendations!</h1>
              <p className="subtitle" id="final-description">We generated the following recommendations based on matches with your personality profile.
                Click any of the recommendations to see more!
              </p>
              <div className="button-holder">
                <button type="button" id="print" className="button-white">Print results</button>
                <button type="button" className="button-red">Email my results</button>
              </div>
              {this.finalResults()}
              <NavLink to="/">
                <button className="button" type="button">Start over</button>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
}

function mapStateToProps(reduxState) {
  return {
    results: reduxState.results,
  };
}

export default connect(mapStateToProps, null)(FinalResults);
