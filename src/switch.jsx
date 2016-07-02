import React, { Component, PropTypes } from 'react';

class Switch extends Component {

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(this.props.checked, event);
    }
  }

  onFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(this.props.checked, event);
    }
  }

  onBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.checked, event);
    }
  }

  onKeyUp(event) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(this.props.checked, event);
    }
  }

  onKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(this.props.checked, event);
    }
  }

  onKeyPress(event) {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(this.props.checked, event);
    }
  }

  render() {
    const classes = [
      this.props.componentCSSClassName,
      this.props.className,
    ].join(' ').trim();

    return (
      <div className={classes}>
        <input
          {...this.props}
          className={`${this.props.componentCSSClassName}__checkbox`}
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
        />
        <label
          className={`${this.props.componentCSSClassName}__label`}
          htmlFor={this.props.name}
          onClick={this.props.onClick}
        >
          <span
            className={`${this.props.componentCSSClassName}__inner`}
            data-content-on={this.props.switchTextOn}
            data-content-off={this.props.switchTextOff}
          />
          <span className={`${this.props.componentCSSClassName}__toggle`} />
        </label>
      </div>
    );
  }

}

Switch.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  componentCSSClassName: PropTypes.string,
  switchTextOn: PropTypes.string,
  switchTextOff: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.any,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  className: PropTypes.string,
};

Switch.defaultProps = {
  name: null,
  disabled: false,
  componentCSSClassName: 'switch',
  switchTextOn: 'on',
  switchTextOff: 'off',
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

export default Switch;
