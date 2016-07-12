import React, { Component, PropTypes } from 'react';

class Alert extends Component {

  renderDismissIcon() {
    if (!this.props.dismissable) {
      return null;
    }

    // TODO: Do we need to nest the `dismissIcon` in a span as well, or could this be a single span?
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
    // TODO: Update to use classnames package
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
  componentCSSClassName: PropTypes.string,
  dismissable: PropTypes.bool,
  dismissIcon: PropTypes.any,
  show: PropTypes.bool,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func,
};

Alert.defaultProps = {
  className: null,
  componentCSSClassName: 'alert',
  dismissable: false,
  dismissIcon: String.fromCharCode(10761),
  show: false,
  onClick: null,
  onDismiss: null,
};

export default Alert;
