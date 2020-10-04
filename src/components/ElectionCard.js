/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

class ElectionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      recommendation: '',
    };
  }

  componentDidMount = () => {
    const recommendation_name = this.determineRecommendation();

    // eslint-disable-next-line eqeqeq
    const recommendation = this.props.election.candidates.filter((candidate) => candidate.name == recommendation_name);
    this.setState({
      recommendation,
    });
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

    handleCloseModal = () => {
      this.setState({ showModal: false });
    }

  candidateNameFixing = (candidate) => {
    const candidateName = candidate.name;
    const candidateParty = candidate.party[0];
    const fixedName = `${candidateName} (${candidateParty})`;
    console.log(fixedName);
    return fixedName;
  }

  candidatesList = (election) => {
    return (election.candidates.map((candidate) => {
      return (
        <div className="candidate-name">{this.candidateNameFixing(candidate)}</div>
      );
    })
    );
  }

  determineRecommendation = () => {
    let maxScore = 0;
    let maxName = '';

    for (const candidate of this.props.election.candidates) {
      if (candidate.profile.average_score > maxScore) {
        maxScore = candidate.profile.average_score;
        maxName = candidate.name;
      }
    }

    console.log(maxName);
    return maxName;
  }

  findNeedScore = () => {
    let maxScore = 0;
    let maxName = '';

    for (const candidate of this.props.election.candidates) {
      if (candidate.profile.average_score > maxScore) {
        maxScore = candidate.profile.average_score;
        maxName = candidate.name;
      }
    }

    console.log(maxName);
    // eslint-disable-next-line eqeqeq
    return (this.props.election.candidates.filter((candidate) => candidate.name == maxName)[0].profile.needs_score.toString());
  }

  findValuesScore = () => {
    let maxScore = 0;
    let maxName = '';

    for (const candidate of this.props.election.candidates) {
      if (candidate.profile.average_score > maxScore) {
        maxScore = candidate.profile.average_score;
        maxName = candidate.name;
      }
    }

    console.log(maxName);
    // eslint-disable-next-line eqeqeq
    return (this.props.election.candidates.filter((candidate) => candidate.name == maxName)[0].profile.values_score.toString());
  }

  displayValues = () => {
    let valuesString = this.props.election.values[0];
    for (let valueIndex = 1; valueIndex < this.props.election.values.length; valueIndex++) {
      valuesString = `${valuesString}, ${this.props.election.values[valueIndex]}`;
    }
    console.log(valuesString);
    return (
      <div className="valuesString">{valuesString}</div>
    );
  }

  render() {
    console.log(this.props.election);
    console.log(this.props.election.candidates);
    return (
      <div key={this.props.election.id} className="checkbox-card">
        <h1 className="election-title">{this.props.election.office} </h1>
        <div className="red-line" />
        <h2 className="election-card-recommendation">{this.determineRecommendation()}</h2>
        <button className="button-transparent" onClick={this.handleOpenModal} type="button">See why</button>
        <div className="modal-flex">
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="ResultModal"
            className="modal"
            overlayClassName="overlay"
            ariaHideApp={false}
          >
            <div className="modal-main">
              <div className="modal-upper-row">
                <FontAwesomeIcon icon={faTimes} className="exit-icon" onClick={this.handleCloseModal} />
              </div>
              <div className="modal-information">
                <h1 className="election-title">{this.props.election.office} </h1>
                <div className="red-line" id="modal-version-redline" />
                <h2 className="election-card-recommendation" id="modal-version-recommendation">{this.props.election.candidates[0].name}</h2>
                <div className="red-line-small" />
                <div className="heres-why">Here&apos;s why:</div>
                <div className="similar" id="need-similar">Your needs are {this.findNeedScore()}% similar. </div>
                <input type="range" disabled className="modal-slider" min="0" max="100" value={this.findNeedScore()} />
                <div className="similar" id="value-similar">Your values are {this.findValuesScore()}% similar. </div>
                <input type="range" disabled className="modal-slider" min="0" max="100" value={this.findValuesScore()} />
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default ElectionCard;
