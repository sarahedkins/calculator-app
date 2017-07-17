import React, { Component } from 'react';
import Welcome from './Welcome';
import Calculator from './Calculator';
import Notepad from './Notepad';

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Calculator />
        <br />
        <br />
        <Notepad />
      </div>
    );
  }
}
