import React, { Component } from 'react';
import style from '../styles/calculator.css';

export default class Calculator extends Component {

  constructor(props) {
    super(props);

    const today = new Date();
    const currentMonthIndex = today.getMonth();
    const initialWant = this.getWantValue();
    const initialHave = this.getHaveValue();
    const initialSavings = this.getSavingsValue();
    const initialToGo = (initialWant || 0) - (initialHave || 0);
    const initialMonthsToGo = Math.round(
      ((initialWant || 0) - (initialHave || 0)) / (initialSavings || 0)
    );


    this.state = {
      want: initialWant || 0,
      have: initialHave || 0,
      toGo: initialToGo || 0,
      savePerMonth: initialSavings || 0,
      monthsToGo: initialMonthsToGo || 0,
      currentMonthIndex,
    };
  }

  // Setters and Getters for LocalStorage
  setWantValue = (val) => {
    localStorage.want = val;
  };

  getWantValue = () => localStorage.want;

  setHaveValue = (val) => {
    localStorage.have = val;
  };

  getHaveValue = () => localStorage.have;

  setSavingsValue = (val) => {
    localStorage.savings = val;
  };

  getSavingsValue = () => localStorage.savings;
  // end of Setters and Getters for LocalStorage

  handleWantInput = (e) => {
    this.setWantValue(e.target.value);
    this.setState({
      want: e.target.value,
      toGo: e.target.value - this.state.have,
      monthsToGo: Math.round((e.target.value - this.state.have) / this.state.savePerMonth),
    });
  }

  handleHaveInput = (e) => {
    this.setHaveValue(e.target.value);
    this.setState({
      have: e.target.value,
      toGo: this.state.want - e.target.value,
      monthsToGo: Math.round((this.state.want - e.target.value) / this.state.savePerMonth),
    });
  }

  handleMonthInput = (e) => {
    this.setSavingsValue(e.target.value);
    this.setState({
      savePerMonth: e.target.value,
      monthsToGo: Math.round(this.state.toGo / e.target.value),
    });
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  render() {
    return (
      <div className="border">
        <h1 className="header">Savings Calculator</h1>
        Want: <input type="text" onChange={this.handleWantInput} value={this.state.want} />
        <br />
        Have: <input type="text" onChange={this.handleHaveInput} value={this.state.have} />
        <br />
        To Go: {this.state.toGo}

        <hr />

        Savings Per Month: <input type="text" onChange={this.handleMonthInput} value={this.state.savePerMonth} />
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
