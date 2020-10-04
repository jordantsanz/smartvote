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
      <div className="page-wrapper" id="page-7">
        <div className="main-page-holder">
          <h1 className="title" id="page-7-title">Tell us about yourself!</h1>
          <h2 className="subtitle" id="questions">Please write 100-150 words about yourself in the box below. Try to answer questions like “What do you care about?” or
            “What is most important to you in life?”
          </h2>
          <textarea onChange={this.saveAnswer} />
          <NavLink to="/loadingfinal">
            <button type="button" id="submit-answer" className="button-red" onClick={this.submitAnswer}>Submit</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default WriteInfo;
