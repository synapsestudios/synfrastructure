import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {

  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(this.props.id, event.target.checked, event);
    }
  }

  onBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.id, event.target.checked, event);
    }
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(this.props.id, event.target.checked, event);
    }
  }

  onKeyUp(event) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(this.props.id, event.target.checked, event);
    }
  }

  onKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(this.props.id, this.props.checked, event);
    }
  }

  onKeyPress(event) {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(this.props.id, this.props.checked, event);
    }
  }

  render() {
    let classes = [
      this.props.componentCSSClassName,
      this.props.className,
    ].join(' ');

    return (
      <input
        {...this.props}
        className={classes}
        id={this.props.id}
        name={this.props.name}
        type="checkbox"
        checked={this.props.checked}
        value={this.props.value}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
        disabled={this.props.disabled}
        tabIndex={this.props.tabIndex}
      />
    );
  }

}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  componentCSSClassName: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  className: PropTypes.string,
  tabIndex: PropTypes.string,
};

Checkbox.defaultProps = {
  name: null,
  disabled: false,
  componentCSSClassName: 'checkbox',
  checked: false,
  value: undefined,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
  className: null,
};

export default Checkbox;
