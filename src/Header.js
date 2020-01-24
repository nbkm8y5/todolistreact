import React, { Component } from 'react';
import './css/Header.css';
import logo from './media/general-electric-logo.svg'

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="Header-flex-column-one"> 
            <img src={logo} className="Header-app-logo" alt="logo"/>
          </div>
          <div className="Header-flex-column-one">
          </div>
          <div className="Header-flex-column-one">
            <h2>{this.props.viewTitle}</h2>
          </div>
          <div className="Header-flex-column-one">
          </div>
          <div className="Header-flex-column-one">
          </div>
        </header>
    );
  }
}

export default Header;