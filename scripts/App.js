import React, { Component } from 'react';
import Welcome from 'welcome-name-react';
import Calculator from './Calculator';
import Notepad from './Notepad';

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <br />
        <Calculator />
        <br />
        <br />
        <Notepad />
      </div>
    );
  }
}
