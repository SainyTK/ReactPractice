import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let {number, add, sub, prevAction} = this.props;
    return (
      <div className="App">
        <button onClick={add}>Add</button>
        <div>{number}</div>
        <button onClick={sub}>Sub</button>
        <h1>{prevAction}</h1>
      </div>
    );
  }
}

export default App;