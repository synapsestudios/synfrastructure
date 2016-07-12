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
  children: PropTypes.any,
  className: PropTypes.string,
  componentCSSClassName: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.oneOf([
    'a',
    'button',
    'input',
    'span',
    'div',
  ]),
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  componentCSSClassName: 'button',
  disabled: false,
  element: 'button',
  onClick: null,
};

export default Button;
