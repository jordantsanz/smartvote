import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { calculatePersonalityWithText } from '../actions';

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
    let words = 0;
    console.log(this.state.writtenAnswer);
    const array = this.state.writtenAnswer.split(' ');
    console.log(array);
    words = array.length;

    console.log(words);

    if (words >= 100) {
      this.props.calculatePersonalityWithText(this.props.electionData, this.state.writtenAnswer);
      this.props.history.push('/loadingfinal');
    } else {
      $('.error-message-box').delay(200).fadeIn(200).delay(2500)
        .fadeOut();
    }
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
          <button type="button" id="submit-answer" className="button-red" onClick={this.submitAnswer}>Submit</button>
          <div className="error-message-box">
            <div className="error">Please make sure your submission is at least 100 words.</div>
          </div>
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
export default connect(mapStateToProps, { calculatePersonalityWithText })(WriteInfo);
