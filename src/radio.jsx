import React, { Component, PropTypes } from 'react';

class Radio extends Component {

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(this.props.id, this.props.checked, event);
    }
  }

  onFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(this.props.id, this.props.checked, event);
    }
  }

  onBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.id, this.props.checked, event);
    }
  }

  onKeyUp(event) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(this.props.id, this.props.checked, event);
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
    const classes = [
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
        type="radio"
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

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  componentCSSClassName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
};

Radio.defaultProps = {
  checked: false,
  className: null,
  componentCSSClassName: 'radio',
  disabled: false,
  name: null,
  value: null,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
};

export default Radio;
