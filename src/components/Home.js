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
          <h1 className="title" id="page-0-title">Vote smarter.</h1>
          <NavLink to="/findlocation">
            <button type="button" className="button-red" id="get-started-button">Get started</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Home;
