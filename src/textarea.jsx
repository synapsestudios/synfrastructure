import React, { Component, PropTypes } from 'react';

class TextArea extends Component {

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
    const resizeClass = ! this.props.resize ?
      `${this.props.componentCSSClassName}--no-resize` : null;

    const classes = [
      this.props.componentCSSClassName,
      `${this.props.componentCSSClassName}--${this.props.type}`,
      resizeClass,
      this.props.className,
    ].join(' ').trim();

    return (
      <textarea
        {...this.props}
        className={classes}
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        rows={this.props.rows}
        placeholder={this.props.placeholder}
        style={this.props.style}
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

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  componentCSSClassName: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.any,
  value: PropTypes.any,
  rows: PropTypes.number,
  resize: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  className: PropTypes.string,
  tabIndex: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

TextArea.defaultProps = {
  componentCSSClassName: 'textarea',
  placeholder: null,
  style: null,
  value: undefined,
  rows: 4,
  resize: true,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
  disabled: false,
  className: null,
};

export default TextArea;
