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
        className={classes}
        id={this.props.id}
        name={this.props.name}
        type="radio"
        checked={this.props.checked}
        value={this.props.value}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
        disabled={this.props.disabled}
      />
    );
  }

}

Radio.propTypes = {
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
};

Radio.defaultProps = {
  name: null,
  disabled: false,
  componentCSSClassName: 'radio',
  checked: false,
  value: null,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
  className: null,
};

export default Radio;
