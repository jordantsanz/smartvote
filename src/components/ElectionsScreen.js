/* eslint-disable no-plusplus */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { queryElectionData, calculateAddress } from '../actions';

class ElectionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electionsOfInterest: {},
      checkedItems: new Map(),
    };
  }

selectAll = () => {

}

deselectAll = () => {

}

// Checkbox Change
handleCheckboxChange = (event) => {
  const isChecked = event.target.checked;
  const { id } = event.target;

  this.setState((prevState) => ({ checkedItems: prevState.checkedItems.set(id, isChecked) }));
}

// Checkboxes submit
submitChecks = () => {
  console.log(this.state.checkedItems);
  const elections = [];
  for (let index = 0; index < this.props.electionData.length; index++) {
    if (this.state.checkedItems.get(index.toString())) {
      elections.push(this.props.electionData[index]);
    }
  }

  const electionsOfInterest = {
    elections,
  };

  this.setState(electionsOfInterest); // need to pass somewhere or something
  console.log(this.state.electionsOfInterest);
  console.log(electionsOfInterest);
}

electionDataRender = () => {
  return (
    this.props.electionData.map(((election, index) => {
      // not expanded version
      if (election.type === 'General') {
        return (
        // eslint-disable-next-line react/no-array-index-key
          <div className="checkbox-card" key={index}>
            <input type="checkbox" id={index} onChange={this.handleCheckboxChange} />
            <h1 className="election-title">{election.office} </h1>
          </div>
        );
      } else {
        return (
          <div className="blank" />
        );
      }
    }
    ))
  );
}

render() {
  return (
    <div className="page-wrapper" id="page-4">
      <h1 className="title" id="page-4-title">Here&apos;s a list of your upcoming elections...</h1>
      <div className="button-holder">
        <button className="button" type="button" id="select-all" onClick={this.selectAll}>Select all</button>
        <button className="button" type="button" id="deselect-all" onClick={this.deselectAll}>Deselect all</button>
      </div>
      <div className="checkbox-cards-list">
        {this.electionDataRender()}
      </div>
      <NavLink to="/aboutyou">
        <button type="button" onClick={this.submitChecks}>Continue</button>
      </NavLink>
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

export default connect(mapStateToProps, { queryElectionData, calculateAddress })(ElectionsScreen);
