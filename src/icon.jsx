import React, { PropTypes } from 'react';

function Icon(props) {
  const colorThemeClass = props.colorTheme ? `icon--${props.colorTheme}` : null;
  const rotationClass = `icon--rotate-${props.rotate}`;
  const sizeClass = props.size ? `icon--${props.size}` : null;
  const classes = [
    'icon',
    props.className,
    colorThemeClass,
    rotationClass,
    sizeClass,
  ].join(' ').trim();

  return (
    <span className={classes} onClick={props.onClick}>
      {props.children}
    </span>
  );
}

Icon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
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
  rotate: PropTypes.oneOf([
    0,
    45,
    90,
    180,
    270,
  ]),
  size: PropTypes.oneOf([
    'x-small',
    'small',
    'large',
    'x-large',
    null,
  ]),
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  className: null,
  colorTheme: null,
  rotate: 0,
  size: null,
  onClick: null,
};

export default Icon;
