import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class WriteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writtenAnswer: '',
    };
  }

saveAnswer = (event) => {
  this.setState({
    writtenAnswer: event.target.value,
  });
}

  submitAnswer = () => {
    console.log(this.state.writtenAnswer); // should actually submit this somewhere
  }

  render() {
    return (
      <div className="page-wrapper" id="page-6">
        <h1 className="title" id="tell-us">Tell us about yourself!</h1>
        <h2 className="subtitle" id="questions">Write 100-200 words about yourself. Try to answer questions such as question 1 and question 2.</h2>
        <textarea onChange={this.saveAnswer} />
        <NavLink to="/loadingfinal">
          <button type="button" id="submit-answer" className="button" onClick={this.submitAnswer}>Submit answer</button>
        </NavLink>
      </div>
    );
  }
}

export default WriteInfo;
