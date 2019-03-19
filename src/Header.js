import React, { Component } from 'react';
import './css/Header.css';
import logo from './media/General_Electric_logo.png'

class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
          <h4>{this.props.viewTitle}</h4>
        </header>
    );
  }
}

export default Header;