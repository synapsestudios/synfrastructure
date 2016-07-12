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
    ].join(' ').trim();

    return (
      <input
        {...this.props}
        checked={this.props.checked}
        className={classes}
        disabled={this.props.disabled}
        id={this.props.id}
        name={this.props.name}
        type="checkbox"
        tabIndex={this.props.tabIndex}
        value={this.props.value}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
      />
    );
  }

}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  componentCSSClassName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  tabIndex: PropTypes.string,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  className: null,
  componentCSSClassName: 'checkbox',
  disabled: false,
  name: null,
  value: undefined,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
};

export default Checkbox;
