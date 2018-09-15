import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    number : 0,
  }

  handleAdd = () => {
    const {number} = this.state
    console.log(number)
    this.setState({number : number + 1})
  }

  handleSub = () => {
    const {number} = this.state
    console.log(number)
    this.setState({number : number - 1})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleAdd}>Add</button>
        <div>0</div>
        <button onClick={this.handleSub}>Sub</button>
      </div>
    );
  }
}

export default App;