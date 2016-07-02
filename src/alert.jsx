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

  renderAlertChildren() {
    return (
      <div className={`${this.props.componentCSSClassName}__content`}>
        {this.props.message}
        {this.props.children}
        {this.renderDismissIcon()}
      </div>
    );
  }

  render() {
    const alertClasses = [
      this.props.componentCSSClassName,
      this.props.className,
    ].join(' ').trim();

    const AlertComponent = React.createElement(
      'div',
      {
        ...this.props,
        className: alertClasses,
        onClick: this.props.onClick,
      },
      this.renderAlertChildren()
    );

    return AlertComponent;
  }

}

Alert.propTypes = {
  componentCSSClassName: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool,
  canDismiss: PropTypes.bool,
  dismissIcon: PropTypes.any,
  onDismiss: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any,
};

Alert.defaultProps = {
  componentCSSClassName: 'alert',
  message: null,
  show: false,
  canDismiss: false,
  dismissIcon: String.fromCharCode(10761),
  onDismiss: null,
  onClick: null,
  className: null,
};

export default Alert;
