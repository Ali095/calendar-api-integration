import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get('https://basic-ivr.herokuapp.com/api/v1/call/list-calls')
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.error(err);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
