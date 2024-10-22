import React from 'react';
import './App.css';
import logo from './logo.svg';  

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>React JS</h1>
        <img src={logo} className="logo" alt="React Logo" />
      </div>
      <div className="body">
        Hello World
      </div>
    </div>
  );
}

export default App;
