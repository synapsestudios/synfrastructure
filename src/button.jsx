import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Button extends Component {

  render() {
    const buttonClasses = {
      button: true,
      'button--disabled': this.props.disabled,
      [`button--size--${this.props.size}`]: this.props.size,
      [`button--theme--${this.props.theme}`]: this.props.theme,
      [`button--display--${this.props.display}`]: this.props.display,
      [`${this.props.className}`]: this.props.className,
    };

    const ButtonComponent = React.createElement(
      this.props.element,
      {
        ...this.props,
        className: classNames(buttonClasses),
      },
      <span className="button__children">
        {this.props.children}
      </span>
    );

    return ButtonComponent;
  }

}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  theme: PropTypes.oneOf([
    'black',
    'white',
    'primary',
    'secondary',
    'tertiary',
    'status--success',
    'status--warning',
    'status--error',
    'status--info',
  ]),
  disabled: PropTypes.bool,
  display: PropTypes.oneOf([
    'block',
    'inline',
  ]),
  element: PropTypes.oneOf([
    'a',
    'button',
    'input',
    'span',
    'div',
  ]),
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ]),
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  theme: 'primary',
  disabled: false,
  element: 'button',
  size: 'medium',
  onClick: null,
};

export default Button;
