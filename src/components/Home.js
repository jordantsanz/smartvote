/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="page-wrapper" id="page-0">
        <div className="main-page-holder">
          <div className="main-page-title">
            <img className="vote-image" src="src/images/VoteSticker.svg" alt="vote" />
            <div className="right-side">
              <h1 className="title" id="page-0-title">Smarter.</h1>
              <NavLink to="/findlocation">
                <button type="button" className="button-white" id="get-started-button">Get started</button>
              </NavLink>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
export default Home;
