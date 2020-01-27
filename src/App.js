import React from 'react';
import './css/App.css';
import TodoList from './TodoList';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header viewTitle="Today"></Header>
        <TodoList></TodoList>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
