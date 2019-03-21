import React, { Component } from 'react';
import './css/Alert.css'

class Alert extends Component {
  render() {
    return (
        <div className={this.props.alertClass} hidden={this.props.listAlertStatus}>
        {this.props.alertDescription}
        </div>
    );
  }
}

export default Alert;