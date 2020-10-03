import React, { Component } from 'react';

class Sliders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 50,
      value2: 50,
      value3: 50,
      value4: 50,
      value5: 50,
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

  onSubmit = () => {
    // call to database to store all 5 values??? or can we keep them in the front end???
  }

  render() {
    return (
      <div className="sliders">
        <div>Self-transcendence / Helping others</div>
        <input type="range" id="value1" name="value" min="0" max="100" defaultValue="50" onInput={this.getValue1} />
        <div>{this.state.value1}</div>
        <div>Conservation / Tradition</div>
        <input type="range" id="value2" name="value" min="0" max="100" defaultValue="50" onInput={this.getValue2} />
        <div>{this.state.value2}</div>
        <div>Hedonism / Taking pleasure in life</div>
        <input type="range" id="value3" name="value" min="0" max="100" defaultValue="50" onInput={this.getValue3} />
        <div>{this.state.value3}</div>
        <div>Self-enhancement / Achieving success</div>
        <input type="range" id="value4" name="value" min="0" max="100" defaultValue="50" onInput={this.getValue4} />
        <div>{this.state.value4}</div>
        <div>Open to change / Excitement</div>
        <input type="range" id="value5" name="value" min="0" max="100" defaultValue="50" onInput={this.getValue5} />
        <div>{this.state.value5}</div>
        <input type="button" value="Submit" onInput={this.onSubmit} />
      </div>
    );
  }
}

export default Sliders;
