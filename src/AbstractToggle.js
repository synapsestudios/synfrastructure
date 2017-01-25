import React, { Component, PropTypes } from 'react';

class AbstractToggle extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    if (
      !this.constructor.checkedIcon ||
      !this.constructor.uncheckedIcon ||
      !this.constructor.type
    ) {
      console.warn('AbstractToggle must be extended with type, checkedIcon, and uncheckedIcon');
    }
  }
  render() {
    return (
      <div>
        <span>
          {this.props.checked ? this.constructor.checkedIcon : this.constructor.uncheckedIcon}
        </span>
        <input type={this.constructor.type} {...this.props} />
      </div>
    );
  }
}

export default AbstractToggle;
