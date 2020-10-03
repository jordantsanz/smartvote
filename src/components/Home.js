/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { queryElectionData, calculateAddress } from '../actions';
import Sliders from './Sliders';
import ElectionCard from './ElectionCard';

class Home extends Component {
  /// CONDITIONAL RENDERING DONE BY PAGE NUMBER; EACH PAGE IS A DIFFERENT SECTION OF THE APP
  render() {
    return (
      <div className="page-wrapper" id="page-0">
        <h1 className="title" id="page-0-title">Vote smarter.</h1>
        <NavLink to="/findlocation">
          <button type="button" className="button" id="get-started-button">Get started</button>
        </NavLink>
      </div>
    );
  }
}
export default Home;
