import React, { Component } from 'react';
import Alert from '../src/alert';

class AlertDocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: true,
    };

    this.hideNotification = this.hideNotification.bind(this);
  }

  hideNotification() {
    this.setState({
      showNotification: false,
    });
  }

  render() {
    return (
      <div className="section">
        <h1 className="h1">Alert Component</h1>
        <Alert type="notification">
          This is an information alert
        </Alert>
        <Alert type="success">
          This is an success alert
        </Alert>
        <Alert type="warning">
          This is an warning alert
        </Alert>
        <Alert type="error">
          This is an error alert
        </Alert>
        <Alert
          type="notification"
          isVisible={this.state.showNotification}
          onDismiss={() => this.hideNotification()}
        >
          This is an dismissable alert
        </Alert>
      </div>
    );
  }
}

export default AlertDocs;
