import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import LoginSection from "./LoginSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <LoginSection/>
      </div>
    );
  }
}

export default App;
