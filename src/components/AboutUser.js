import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AboutUser extends Component {
  render() {
    return (
      <div className="page-wrapper" id="page-5">
        <h1 className="title" id="now-you">Now, you!</h1>
        <p className="subtitle-text">In order to generate your recommendations, we need to know you a bit better...</p>
        <button type="button" className="button" id="connect-to-facebook">Connect to facebook</button>
        <button type="button" className="button" id="connect-to-twitter">Connect to twitter</button>
        <NavLink to="/write">
          <button type="button" className="button" id="write-a-response" onClick={this.pageMove}>Write a response</button>
        </NavLink>
      </div>
    );
  }
}

export default AboutUser;
