/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown, faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

class ElectionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  switchStateExpanded = () => {
    this.setState({
      expanded: true,
    });
  }

  switchStateNotExpanded = () => {
    this.setState({
      expanded: false,
    });
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

  isExpanded = (election) => {
    if (this.state.expanded) {
      return (
        <div className="bottom-wrapper">
          <div className="candidates-list">List of candidates:</div>
          {this.candidatesList(election)}
          <FontAwesomeIcon icon={faArrowUp} onClick={this.switchStateNotExpanded} />
        </div>
      );
    } else {
      return (
        <div className="bottom-wrapper">
          <div className="expand-more">Click to expand more</div>
          <FontAwesomeIcon icon={faArrowDown} onClick={this.switchStateExpanded} />
        </div>
      );
    }
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
      <div key={this.props.election.id} className="election-card-wrapper">
        <h1 className="election-card-race">{this.props.election.office} </h1>
        <h2 className="election-card-recommendation">Recommendation: {this.props.election.recommendation}</h2>
        <p className="election-card-values">Values: {this.displayValues()}</p>
        {this.isExpanded(this.props.election)}
      </div>
    );
  }
}

export default ElectionCard;
