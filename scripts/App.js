import React, { Component } from 'react';
import Welcome from './Welcome';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Calculator />
      </div>
    );
  }
}
