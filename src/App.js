import React, { Component } from 'react';
import logo from './img/cropped_rose.png';
import './App.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="App-header">
          <img className="rose" src={logo} alt='rose'/>
          <h1>Welcome to TT Buddies</h1>
        </header>
      </div>
    );
  }
}

export default Landing;
