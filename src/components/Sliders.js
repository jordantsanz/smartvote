/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { calculatePersonalityWithSliders } from '../actions';

class Sliders extends Component {
  constructor(props) {
    super(props);

    this.state = {

      /// Value
      helpingOthers: 50,
      tradition: 50,
      pleasure: 50,
      selfEnhancement: 50,
      openToChange: 50,

      /// Needs
      excitement: 50,
      harmony: 50,
      curiosity: 50,
      ideal: 50,
      closeness: 50,
      selfExpression: 50,
      liberty: 50,
      love: 50,
      practicality: 50,
      stability: 50,
      challenge: 50,
      structure: 50,

    };

    this.getValue1 = this.getValue1.bind(this);
    this.getValue2 = this.getValue2.bind(this);
    this.getValue3 = this.getValue3.bind(this);
    this.getValue4 = this.getValue4.bind(this);
    this.getValue5 = this.getValue5.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getValue1 = () => {
    const newval = document.getElementById('value1').value;
    this.setState({ value1: newval });
  }

  getValue2 = () => {
    const newval = document.getElementById('value2').value;
    this.setState({ value2: newval });
  }

  getValue3 = () => {
    const newval = document.getElementById('value3').value;
    this.setState({ value3: newval });
  }

  getValue4 = () => {
    const newval = document.getElementById('value4').value;
    this.setState({ value4: newval });
  }

  getValue5 = () => {
    const newval = document.getElementById('value5').value;
    this.setState({ value5: newval });
  }

  setScore = (event) => {
    // console.log(title);
    const val = event.target.value;
    const title = event.target.id;
    this.setState({ [title]: parseInt(val, 10) });
    console.log(val);
  }

  onSubmit = () => {
    window.scrollTo(0, 0);
    // call to database to store all 5 values??? or can we keep them in the front end???
    const needs = [];
    const needsList = ['excitement', 'harmony', 'curiosity', 'ideal', 'closeness', 'selfExpression', 'liberty', 'love', 'practicality', 'stability', 'challenge', 'structure'];

    for (const need of needsList) {
      const raw_score = this.state[need];
      const name = need;
      const new_obj = {
        raw_score,
        name,
      };
      needs.push(new_obj);
    }
    const values = [];
    const valuesList = ['helpingOthers', 'tradition', 'pleasure', 'selfEnhancement', 'openToChange'];

    for (const value of valuesList) {
      const raw_score = this.state[value];
      const name = value;
      const new_obj = {
        raw_score,
        name,
      };
      values.push(new_obj);
    }
    const user = {
      needs,
      values,
    };
    console.log(user);
    this.props.calculatePersonalityWithSliders(this.props.electionData, user);
  }

  returnSlider = (title, paragraph, value, need) => {
    if (need) {
      return (
        <div className="single-slider">
          <h3 className="single-slider-title">{title}</h3>
          <p className="single-slider-paragraph">{paragraph}</p>
          <div className="slider-flex">
            <div className="label-on-slider">Not important</div>
            <input type="range" id={title} onInput={this.setScore} defaultValue={value.toString()} disabled={false} name="value" max="100" min="0" />
            <div className="label-on-slider">Very Important</div>
          </div>
        </div>
      );
    } else {
      let finalString = '';
      let pauseNum = 0;
      for (let charIndex = 0; charIndex < title.length; charIndex++) {
        if (title[charIndex] == title[charIndex].toUpperCase()) {
          const word = title.slice(pauseNum, charIndex);
          finalString = `${finalString} ${word}`;
          pauseNum = charIndex;
        }
      }
      const word = title.slice(pauseNum);
      finalString = `${finalString} ${word}`;
      return (
        <div className="single-slider">
          <h3 className="single-slider-title">{finalString}</h3>
          <p className="single-slider-paragraph">{paragraph}</p>
          <div className="slider-flex">
            <div className="label-on-slider">This isn&apos;t me</div>
            <input type="range" id={title} onInput={this.setScore} defaultValue={value.toString()} disabled={false} name="value" max="100" min="0" />
            <div className="label-on-slider">This is me</div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="page-wrapper" id="page-sliders">
        <div className="main-page-holder" id="sliders-main-page">
          <h1 className="title" id="page-sliders-title">Tell us about your needs and values.</h1>
          <p className="subtitle" id="sliders-main-description">Slide the marker on the scales below to
            rate how much each need or value is important to you. We’ll use these values to determine your personality profile.
          </p>
          <div className="slider-section">
            <h2 className="section-title" id="needs-title">Needs</h2>
            {this.returnSlider('excitement', 'Want to get out there and live life, have upbeat emotions, and want to have fun.', 50, true)}
            {this.returnSlider('harmony', 'Appreciate other people, their viewpoints, and their feelings.', 50, true)}
            {this.returnSlider('curiosity', 'Have a desire to discover, find out, and grow.', 50, true)}
            {this.returnSlider('ideal', 'Desire perfection and a sense of community.', 50, true)}
            {this.returnSlider('closeness', 'Relish being connected to family and setting up a home.', 50, true)}
            {this.returnSlider('self-expression', 'Enjoy discovering and asserting their own identities.', 50, true)}
            {this.returnSlider('liberty', 'Have a desire for fashion and new things, as well as the need for escape.', 50, true)}
            {this.returnSlider('love', 'Enjoy social contact, whether one-to-one or one-to-many. Any brand that is involved in bringing people together taps this need.', 50, true)}
            {this.returnSlider('pracicality', 'Have a desire to get the job done, a desire for skill and efficiency, which can include physical expression and experience.', 50, true)}
            {this.returnSlider('stability', 'Seek equivalence in the physical world. They favor the sensible,the tried and tested.', 50, true)}
            {this.returnSlider('challenge', 'Have an urge to achieve, to succeed, and to take on challenges.', 50, true)}
            {this.returnSlider('structure', 'Exhibit groundedness and a desire to hold things together. They need things to be well organized and under control.', 50, true)}
          </div>
          <div className="slider-section">
            <h2 className="section-title" id="values-title">Values</h2>
            {this.returnSlider('helpingOthers', 'Show concern for the welfare and interests of others.', 50, false)}
            {this.returnSlider('tradition', 'Emphasize self-restriction, order, and resistance to change.', 50, false)}
            {this.returnSlider('pleasure', 'Seek pleasure and sensuous gratification for themselves.', 50, false)}
            {this.returnSlider('selfEnhancement', 'Seek personal success for themselves.', 50, false)}
            {this.returnSlider('openToChange', 'Emphasize independent action, thought, and feeling, as well as a readiness for new experiences.', 50, false)}
          </div>
          <NavLink to="/loadingfinal">
            <button type="button" className="button-red" id="submit-sliders" onClick={this.onSubmit}>Submit</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    // address: reduxState.address,
    electionData: reduxState.electionData.contests,
    location: reduxState.location,
  };
}

export default connect(mapStateToProps, { calculatePersonalityWithSliders })(Sliders);
