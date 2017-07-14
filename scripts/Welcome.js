import React, { Component } from 'react';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    const guestname = this.getGuestName();
    this.state = {
      name: guestname || 'Guest',
      submittedName: guestname,
    };
  }

  setGuestName = (val) => {
    localStorage.guestname = val;
  };

  getGuestName = () => localStorage.guestname;

  handleNameInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  submitName = () => {
    this.setGuestName(this.state.name);
    this.setState({
      submittedName: true,
    });
  }

  clearName = () => {
    this.setState({
      submittedName: false,
      name: '',
    });
  }

  render() {
    if (this.state.submittedName && this.state.name) {
      return (
        <div>
          <h2>
            Welcome {this.state.name}!
          </h2>
          <p>
            Not {this.state.name}? &nbsp;
            <button onClick={this.clearName}>
              Click here.
            </button>
          </p>
        </div>
      );
    }
    return (
      <div>
        What is your name?
        <input type="text" onChange={this.handleNameInput} />
        <button type="button" onClick={this.submitName}>
          Submit Name
        </button>
      </div>
    );
  }
}
