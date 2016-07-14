import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Icon(props) {
  const iconClasses = {
    icon: true,
    [`icon--${props.colorTheme}`]: props.colorTheme,
    [`icon--rotate-${props.rotate}`]: props.rotate,
    [`icon--size--${props.size}`]: props.size,
    [`icon--theme--${props.colorTheme}`]: props.colorTheme,
    [`${props.className}`]: props.className,
  };

  return (
    <span
      className={classNames(iconClasses)}
      onClick={props.onClick}
    >
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
    'alt-primary',
    'alt-secondary',
    'alt-tertiary',
    'status--success',
    'status--warning',
    'status--error',
  ]),
  rotate: PropTypes.oneOf([
    0,
    45,
    90,
    180,
    270,
  ]),
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ]),
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  className: null,
  colorTheme: 'black',
  rotate: 0,
  size: 'medium',
  onClick: null,
};

export default Icon;
