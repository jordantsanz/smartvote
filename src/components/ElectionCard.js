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
    };
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
    return (
      <div key={this.props.election.id} className="checkbox-card">
        <h1 className="election-title">{this.props.election.office} </h1>
        <div className="red-line" />
        <h2 className="election-card-recommendation">{this.props.election.recommendation}</h2>
        <button className="button-transparent" onClick={this.handleOpenModal} type="button">See why</button>
        <div className="modal-flex">
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="modal"
            overlayClassName="overlay"
          >
            <div className="modal-main">
              <div className="modal-upper-row">
                <FontAwesomeIcon icon={faTimes} className="exit-icon" onClick={this.handleCloseModal} />
              </div>
              <div className="modal-information">
                <h1 className="election-title">{this.props.election.office} </h1>
                <div className="red-line" id="modal-version-redline" />
                <h2 className="election-card-recommendation" id="modal-version-recommendation">{this.props.election.recommendation}</h2>
                <div className="red-line-small" />
                <div className="heres-why">Here&apos;s why:</div>
                <div className="similar" id="need-similar">Your needs are xx% similar. </div>
                <input type="range" disabled="true" className="modal-slider" min="0" max="100" value="69" />
                <div className="similar" id="value-similar">Your vales are xx% similar. </div>
                <input type="range" disabled="true" className="modal-slider" min="0" max="100" value="69" />
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default ElectionCard;
