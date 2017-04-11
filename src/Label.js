import React from 'react';
import Checkbox from './Checkbox';
import Radio from './Radio';

function Label(props) {
  const newProps = { ...props };

  React.Children.forEach(props.children, child => {
    if (child.type === Radio || child.type === Checkbox) {
      newProps.className = newProps.className
        ? `${newProps.className} toggle`
        : 'toggle';
      newProps.tabIndex = child.props.tabIndex || '0';
      newProps.onKeyDown = e => {
        if (e.keyCode === 32) {
          e.preventDefault();
          document.getElementById(child.props.id).click();
        }
      };
    }
  });

  return (
    <label {...newProps}>
      {props.children}
    </label>
  );
}

export default Label;
