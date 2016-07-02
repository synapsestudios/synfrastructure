import React, { Component, PropTypes } from 'react';

class Button extends Component {

  render() {
    const classes = [
      this.props.componentCSSClassName,
      this.props.className,
      this.props.disabled ? `${this.props.componentCSSClassName}--disabled` : null,
    ].join(' ');

    const ComponentChildren = React.createElement(
      'span',
      {
        className: `${this.props.componentCSSClassName}__children`,
      },
      this.props.children
    );

    const ButtonComponent = React.createElement(
      this.props.element,
      {
        ...this.props,
        className: classes,
        onClick: this.props.onClick,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex,
      },
      ComponentChildren
    );

    return ButtonComponent;
  }

}

Button.propTypes = {
  element: PropTypes.oneOf([
    'a',
    'button',
    'input',
    'span',
    'div',
  ]),
  componentCSSClassName: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.string,
  children: PropTypes.any,
};

Button.defaultProps = {
  element: 'button',
  componentCSSClassName: 'button',
  disabled: false,
  className: null,
  onClick: null,
};

export default Button;
