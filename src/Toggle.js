import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Toggle extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    checkedIcon: PropTypes.node.isRequired,
    uncheckedIcon: PropTypes.node.isRequired,
  };

  render() {
    const { checkedIcon, uncheckedIcon, ...passthroughProps } = this.props;
    const toggleClasses = {
      'toggle-icon': true,
      'toggle-icon--checked': passthroughProps.checked,
      [`toggle-icon--${passthroughProps.type}`]: passthroughProps.type,
    };
    return (
      <div>
        <input {...passthroughProps} style={{ display: 'none' }} />
        <span className={classNames(toggleClasses)}>
          {passthroughProps.checked ? checkedIcon : uncheckedIcon}
        </span>
      </div>
    );
  }
}

export default Toggle;
