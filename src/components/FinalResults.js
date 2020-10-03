import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className="page-wrapper" id="page-7">
          <h1 className="title" id="recommendations">Your recommendations are ready!</h1>
          {this.finalResults()}
          <NavLink to="/">
            <button className="button" type="button">Start over</button>
          </NavLink>
        </div>
      );
    }
}

export default FinalResults;
