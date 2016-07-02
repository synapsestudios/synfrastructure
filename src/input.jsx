import React, { Component, PropTypes } from 'react';

class Input extends Component {

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
    const currentValue = event.currentTarget.value;

    if (this.props.onFocus) {
      this.props.onFocus(currentValue, event);
    }
  }

  onBlur(event) {
    const currentValue = event.currentTarget.value;

    if (this.props.onBlur) {
      this.props.onBlur(currentValue, event);
    }
  }

  onChange(event) {
    const currentValue = event.currentTarget.value;

    if (this.props.onChange) {
      this.props.onChange(currentValue, event);
    }
  }

  onKeyUp(event) {
    const currentValue = event.currentTarget.value;

    if (this.props.onKeyUp) {
      this.props.onKeyUp(currentValue, event);
    }
  }

  onKeyDown(event) {
    const currentValue = event.currentTarget.value;

    if (this.props.onKeyDown) {
      this.props.onKeyDown(currentValue, event);
    }
  }

  onKeyPress(event) {
    const currentValue = event.currentTarget.value;

    if (this.props.onKeyPress) {
      this.props.onKeyPress(currentValue, event);
    }
  }

  render() {
    const classes = [
      this.props.componentCSSClassName,
      `${this.props.componentCSSClassName}--${this.props.type}`,
      this.props.className,
    ].join(' ');

    return (
      <input
        {...this.props}
        className={classes}
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
        disabled={this.props.disabled}
        type={this.props.type}
        tabIndex={this.props.tabIndex}
      />
    );
  }

}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  componentCSSClassName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  tabIndex: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'date',
    'datetime',
    'datetime-local',
    'date',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url',
    'week',
  ]),
};

Input.defaultProps = {
  componentCSSClassName: 'input',
  placeholder: null,
  value: undefined,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
  className: null,
  disabled: false,
  type: 'text',
};

export default Input;
