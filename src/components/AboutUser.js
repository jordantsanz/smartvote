/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AboutUser extends Component {
  render() {
    return (
      <div className="page-wrapper" id="page-6">
        <div className="main-page-holder" id="page-6-wrapper">
          <h1 className="title" id="page-6-title">Now, you!</h1>
          <p className="subtitle-text" id="subtitle-text">In order to generate your recommendations,
            we’ll need to learn a little bit more about who you are and what you care about!
          </p>
          <div className="button-wrappers">
            <button type="button" className="button-red" id="connect-to-facebook">Connect to facebook</button>
            <button type="button" className="button-red" id="connect-to-twitter">Connect to twitter</button>
            <NavLink to="/write">
              <button type="button" className="button-white" id="write-a-response">Write a response</button>
            </NavLink>
            <NavLink to="/sliders">
              <button type="button" className="button-white" id="values-button">Choose my values </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUser;
