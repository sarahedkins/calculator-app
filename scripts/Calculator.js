import React, { Component } from 'react';

export default class Calculator extends Component {

  constructor(props) {
    super(props);

    const today = new Date();
    const currentMonthIndex = today.getMonth();

    this.state = {
      want: 0,
      have: 0,
      toGo: 0,
      savePerMonth: 0,
      monthsToGo: 0,
      currentMonthIndex,
    };
  }

  handleWantInput = (e) => {
    this.setState({
      want: e.target.value,
      toGo: e.target.value - this.state.have,
      monthsToGo: Math.round((e.target.value - this.state.have) / this.state.savePerMonth),
    });
  }

  handleHaveInput = (e) => {
    this.setState({
      have: e.target.value,
      toGo: this.state.want - e.target.value,
      monthsToGo: Math.round((this.state.want - e.target.value) / this.state.savePerMonth),
    });
  }

  handleMonthInput = (e) => {
    this.setState({
      savePerMonth: e.target.value,
      monthsToGo: Math.round(this.state.toGo / e.target.value),
    });
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  render() {
    return (
      <div>
        <h1>Savings Calculator</h1>
        Want: <input type="text" onChange={this.handleWantInput} />
        <br />
        Have: <input type="text" onChange={this.handleHaveInput} />
        <br />
        To Go: {this.state.toGo}

        <hr />

        Savings Per Month: <input type="text" onChange={this.handleMonthInput} />
        <br />
        Months To Go: {this.state.monthsToGo}

        <hr />

        Projected Goal Month: {
          this.months[(this.state.currentMonthIndex + this.state.monthsToGo) % 12]
        }
      </div>
    );
  }
}
