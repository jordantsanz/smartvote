import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ElectionCard from './ElectionCard';

const results = {
  elections: [
    {
      candidates: [
        {
          profile: {
            needs_score: 50,
            values_score: 8,
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

class FinalResults extends Component {
    finalResults = () => {
      return results.elections.map((election) => {
        console.log(election);
        return (
          <ElectionCard election={election} />
        );
      });
    }

    printIt = () => {
      window.print();
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

              <div className="final-cards-holder">
                {this.finalResults()}
              </div>
              <div className="button-holder">
                <button type="button" id="print" className="button-white" onClick={this.printIt}>Print results</button>
                {/* <button type="button" className="button-red">Email my results</button> */}
                <NavLink to="/">
                  <button className="button-red" id="print" type="button">Start over</button>
                </NavLink>
              </div>

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
