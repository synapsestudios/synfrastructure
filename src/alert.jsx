import React, { Component, PropTypes } from 'react';

class Alert extends Component {

  renderDismissIcon() {
    if (!this.props.canDismiss) {
      return null;
    }

    return (
      <span
        className={`${this.props.componentCSSClassName}__dismiss`}
        onClick={this.props.onDismiss}
      >
        <span className={`${this.props.componentCSSClassName}__dismiss__icon`}>
          {this.props.dismissIcon}
        </span>
      </span>
    );
  }

  render() {
    const alertClasses = [
      this.props.componentCSSClassName,
      this.props.className,
    ].join(' ').trim();

    return (
      <div
        {...this.props}
        className={alertClasses}
      >
        <div className={`${this.props.componentCSSClassName}__content`}>
          {this.props.message}
          {this.props.children}
          {this.renderDismissIcon()}
        </div>
      </div>
    );
  }

}

Alert.propTypes = {
  canDismiss: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  componentCSSClassName: PropTypes.string,
  dismissIcon: PropTypes.any,
  message: PropTypes.string,
  show: PropTypes.bool,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func,
};

Alert.defaultProps = {
  canDismiss: false,
  className: null,
  componentCSSClassName: 'alert',
  dismissIcon: String.fromCharCode(10761),
  message: null,
  show: false,
  onClick: null,
  onDismiss: null,
};

export default Alert;
