/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryElectionData, calculateAddress } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      checkedItems: new Map(),
    };
  }

findLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(((position) => {
      this.props.calculateAddress(position.coords.latitude, position.coords.longitude);
      this.pageToDisplay();
    }));
  } else {
    console.log('none');
  }
}

findElectionData = () => {
  this.pageMoveTwo();
  const addressList = this.props.location.address_components;
  let component,
    streetnum,
    streetname,
    city,
    state,
    niceAddress;
  for (component of addressList) {
    switch (component.types[0]) {
      case 'street_number':
        streetnum = component.short_name;
        break;
      case 'route':
        streetname = `${component.short_name}.`;
        break;
      case 'locality':
        city = component.short_name;
        break;
      case 'administrative_area_level_1':
        state = component.short_name;
        break;
      default:
        break;
    }
    niceAddress = `${streetnum} ${streetname} ${city} ${state}`;
  }

  const electionData = this.props.queryElectionData(niceAddress);
  console.log(electionData);
};

renderAddress = () => {
  if (this.props.location.address === null || this.props.location.address === undefined) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <div className="address">{this.props.location.address}</div>
    );
  }
}

pageMove = () => {
  this.setState((prevState) => ({
    pageNum: prevState.pageNum + 1,
  }));
}

pageToDisplay = () => {
  this.setState({
    pageNum: 2, // this is page number of displaying address
  });
}

pageMoveTwo = () => {
  this.setState((prevState) => ({
    pageNum: prevState.pageNum + 2,
  }));
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

  console.log(electionsOfInterest);
}

// Checkbox Change
handleCheckboxChange = (event) => {
  const isChecked = event.target.checked;
  const { id } = event.target;

  this.setState((prevState) => ({ checkedItems: prevState.checkedItems.set(id, isChecked) }));
}

render() {
  switch (this.state.pageNum) {
    // Starter page: page 0
    case 0:
      return (
        <div className="page-wrapper" id="page-0">
          <h1 className="title" id="page-0-title">Vote smarter.</h1>
          <button type="button" onClick={this.pageMove} className="button" id="get-started-button">Get started</button>
        </div>
      );

    // Find address: page 1
    case 1:
      return (
        <div className="page-wrapper" id="page-1">
          <h1 className="title" id="page-1-title">Let&apos;s get started!</h1>
          <button onClick={this.findLocation} className="button" type="button" id="find-your-address-button">Find my elections</button>
          <h2 className="button-subtitle" onClick={this.pageMoveTwo}>Or enter your address</h2>
        </div>
      );

      // Display address: page 2
    case 2:
      return (
        <div className="page-wrapper" id="page-2">
          <h1 className="title" id="page-2-title">Is this you?</h1>
          <h2 className="subtitle" id="formatted-address">{this.props.location.address}</h2>
          <div className="button-holders">
            <button type="button" className="button" id="no-not-me" onClick={this.pageMove}>No, not me</button>
            <button type="button" className="button" id="yes-thats-me" onClick={this.findElectionData}>Yes, that&apos;s me!</button>
          </div>
        </div>
      );

      // Input your own address: page 3
    case 3:
      return (
        <div className="page-wrapper" id="page-3">
          <h1 className="title" id="page-3-title">Enter your address.</h1>
          <input className="input" id="input-address" />
          <button type="button" className="button" id="continue" onClick={this.findLocation}>Continue</button>
        </div>
      );

    // Finding elections/Loading elections: page 4
    case 4:
      if (this.props.electionData.length == 0 || this.props.electionData == undefined) {
        return (
          <div className="page-wrapper" id="page-4">
            <h1 className="title" id="page-4-title"> Finding your election... </h1>
          </div>
        );
      } else {
        return (
          <div className="page-wrapper" id="page-4">
            <h1 className="title" id="page-4-title">Here&apos;s a list of your upcoming elections...</h1>
            <div className="checkbox-cards-list">
              {this.electionDataRender()}
            </div>
            <button type="button" onClick={this.submitChecks}>Continue</button>
          </div>
        );
      }

    default:
      return (
        <div className="bad">Aw man</div>
      );
  }
}
}

function mapStateToProps(reduxState) {
  return {
    // address: reduxState.address,
    electionData: reduxState.electionData.contests,
    location: reduxState.location,
  };
}
export default connect(mapStateToProps, { queryElectionData, calculateAddress })(Home);
