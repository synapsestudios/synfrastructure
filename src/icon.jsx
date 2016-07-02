import React, { Component, PropTypes } from 'react';

class Icon extends Component { // eslint-disable-line

  render() {
    const sizeClass = this.props.size ? `icon--${this.props.size}` : null;
    const colorThemeClass = this.props.colorTheme ? `icon--${this.props.colorTheme}` : null;
    const rotationClass = `icon--rotate-${this.props.rotate}`;
    const classes = [
      'icon',
      sizeClass,
      colorThemeClass,
      rotationClass,
      this.props.className,
    ].join(' ').trim();

    return (
      <span className={classes} onClick={this.props.onClick}>
        {this.props.children}
      </span>
    );
  }
}

Icon.propTypes = {
  size: PropTypes.oneOf([
    'x-small',
    'small',
    'large',
    'x-large',
    null,
  ]),
  rotate: PropTypes.oneOf([
    0,
    45,
    90,
    180,
    270,
  ]),
  colorTheme: PropTypes.oneOf([
    'black',
    'white',
    'primary',
    'secondary',
    'tertiary',
    'status--success',
    'status--warning',
    'status--error',
    null,
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

Icon.defaultProps = {
  size: null,
  rotate: 0,
  colorTheme: null,
  className: null,
  onClick: null,
};

export default Icon;
