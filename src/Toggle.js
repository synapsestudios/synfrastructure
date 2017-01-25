import React, { Component, PropTypes } from 'react';

class Toggle extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    checkedIcon: PropTypes.node.isRequired,
    uncheckedIcon: PropTypes.node.isRequired,
  }

  render() {
    const { checkedIcon, uncheckedIcon, ...passthroughProps } = this.props;
    return (
      <div>
        <span>
          {passthroughProps.checked ? checkedIcon : uncheckedIcon}
        </span>
        <input { ...passthroughProps } />
      </div>
    );
  }
}

export default Toggle;
