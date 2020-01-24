import React, { Component } from 'react';
import './css/App.css';
import TodoList from './TodoList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header viewTitle="Today"></Header>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
