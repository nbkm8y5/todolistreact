import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import logo from './General_Electric_logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
          <h2>GE Todo List</h2>
        </header>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
