import React, { Component } from 'react';
import logo from './logo.svg';
import Whatever from './Whatever.js';
import Bio from './Bio.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Whatever />
        <header className="App-header">
          <Bio />
        </header>
        <fieldset>

          <legend> If you want to know <br /> more about me, please <br /> drop your info
          below. </legend>
          <label> Email: <br />
          <input type="text" name="email" /></label><br />
          <label> Mobile: <br />
          <input type="text" name="mobile" /></label><br />
          <label> Telephone: <br />
          <input type="text" name="telephone" /></label><br />

        </fieldset>
      </div>
    );
  }
}

export default App;
