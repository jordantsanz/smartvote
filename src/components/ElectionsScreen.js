/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-plusplus */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { saveCheckedElections } from '../actions';

class ElectionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
    };
  }

selectAll = () => {
  $(':checkbox').prop('checked', true);
  $(':checkbox').each((checkbox) => {
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(checkbox.toString(), true),
    }));
    $(`#${checkbox}`).parent().parent().parent()
      .css('box-shadow', '4px 4px 20px rgba(239, 35, 60, .3)');
  });
}

deselectAll = () => {
  $(':checkbox').prop('checked', false);
  $(':checkbox').each((checkbox) => {
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(checkbox.toString(), false),
    }));
    $(`#${checkbox}`).parent().parent().parent()
      .css('box-shadow', '0px 0px 0px 0px transparent');
  });
}

// Checkbox Change
handleCheckboxChange = (event) => {
  const isChecked = event.target.checked;
  const { id } = event.target;

  this.setState((prevState) => ({ checkedItems: prevState.checkedItems.set(id, isChecked) }));
  if (isChecked) {
    $(`#${id}`).parent().parent().parent()
      .css('box-shadow', '4px 4px 20px rgba(239, 35, 60, .3)');
  } else {
    $(`#${id}`).parent().parent().parent()
      .css('box-shadow', '0px 0px 0px 0px transparent');
  }
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

  if (elections.length == 0) {
    $('.error-message-box').delay(200).fadeIn(200).delay(2500)
      .fadeOut();
  } else {
    const electionsOfInterest = {
      elections,
    };

    this.props.saveCheckedElections(electionsOfInterest);
    this.props.history.push('/aboutyou');
  }
}

candidatesList = (election) => {
  return election.candidates.map((candidate) => {
    return <div className="candidate-name">{candidate.name}</div>;
  });
}

electionDataRender = () => {
  return (
    this.props.electionData.map(((election, index) => {
      // not expanded version
      if (election.type === 'General') {
        return (
        // eslint-disable-next-line react/no-array-index-key
          <div className="checkbox-card" key={index}>
            <h1 className="election-title">{election.office} </h1>
            <div className="red-line" />
            <div className="candidates-list">
              {this.candidatesList(election)}

              <label className="container" name="checkbox">
                <input type="checkbox" id={index} onChange={this.handleCheckboxChange} />
                <span className="checkmark" />
              </label>
            </div>

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
    <div className="page-wrapper" id="page-5">
      <div className="main-page-holder">
        <h1 className="title" id="page-5-title">Here&apos;s a list of your upcoming elections...</h1>
        <div className="paragraph" id="tell-us-which">Tell us which elections you want us to generate recommendations for by selecting their checkbox.</div>
        <div className="button-holders" id="page-5-button-holder">
          <button className="button-white" type="button" id="deselect-all" onClick={this.deselectAll}>Deselect all</button>
          <button className="button-red" type="button" id="select-all" onClick={this.selectAll}>Select all</button>
        </div>
        <div className="checkbox-cards-list">
          {this.electionDataRender()}
        </div>
        <div className="error-message-box" id="error-electionscreen">
          <div className="error">Please select at least one election. </div>
        </div>
        <button type="button" className="button-nav" id="fixed-button" onClick={this.submitChecks}>Get recommendations</button>
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

export default connect(mapStateToProps, { saveCheckedElections })(ElectionsScreen);
