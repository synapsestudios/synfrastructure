import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Alert extends Component {

  renderDismissIcon() {
    if (!this.props.onDismiss) {
      return null;
    }

    return (
      <span
        className="alert__dismiss"
        onClick={this.props.onDismiss}
      >
        {this.props.dismissIcon}
      </span>
    );
  }

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    const alertClasses = {
      alert: true,
      [`alert--${this.props.theme}`]: true,
      [`${this.props.className}`]: this.props.className,
    };

    return (
      <div
        {...this.props}
        className={classNames(alertClasses)}
      >
        <div className="alert__content">
          {this.props.children}
          {this.renderDismissIcon()}
        </div>
      </div>
    );
  }

}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dismissIcon: PropTypes.any,
  isDismissable: PropTypes.bool,
  isVisible: PropTypes.bool,
  theme: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'error',
  ]),
  onClick: PropTypes.func,
  onDismiss: PropTypes.func,
};

Alert.defaultProps = {
  className: null,
  dismissIcon: String.fromCharCode(10761),
  theme: 'info',
  isVisible: true,
  onClick: null,
  onDismiss: null,
};

export default Alert;
