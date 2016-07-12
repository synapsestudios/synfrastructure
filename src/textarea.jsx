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
  className: PropTypes.string,
  componentCSSClassName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  resize: PropTypes.bool,
  rows: PropTypes.number,
  style: PropTypes.any,
  tabIndex: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
};

TextArea.defaultProps = {
  className: null,
  componentCSSClassName: 'textarea',
  disabled: false,
  placeholder: null,
  resize: true,
  rows: 4,
  style: null,
  value: undefined,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
};

export default TextArea;
