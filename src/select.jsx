import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import find from 'lodash/find';

class Select extends Component {

  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.getSelectedValue = this.getSelectedValue.bind(this);
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

  getSelectedValue() {
    if (this.props.value) {
      return this.props.value;
    }

    const selectedOption = find(this.props.options, { selected: true });

    if (!selectedOption) {
      return null;
    }

    return selectedOption.value;
  }

  renderSelectOptions() {
    if (! this.props.options) {
      return null;
    }

    return map(this.props.options, (option) => (
      <option
        value={option.value}
        key={option.text}
        disabled={option.disabled || false}
      >
        {option.text}
      </option>
    ));
  }

  renderCustomSelect() {
    if (! this.props.customIcon) {
      return this.renderDefaultSelect();
    }

    const classes = [
      'select--custom--wrap',
      this.props.componentWrapCSSClassName,
    ].join(' ').trim();

    return (
      <div className={classes}>
        {this.renderDefaultSelect()}
        <span className="select--custom--icon">
          {this.props.customIcon}
        </span>
      </div>
    );
  }

  renderDefaultSelect() {
    const customSelect = (this.props.customIcon) ?
      `${this.props.componentCSSClassName}--custom` : null;

    const classes = [
      this.props.componentCSSClassName,
      this.props.className,
      customSelect,
    ].join(' ').trim();

    return (
      <select
        {...this.props}
        disabled={this.props.disabled}
        className={classes}
        id={this.props.id}
        name={this.props.id}
        value={this.getSelectedValue()}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
        tabIndex={this.props.tabIndex}
      >
        {this.renderSelectOptions()}
      </select>
    );
  }

  render() {
    return this.renderCustomSelect();
  }

}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any,
      selected: PropTypes.bool,
    })
  ).isRequired,
  componentCSSClassName: PropTypes.string,
  componentWrapCSSClassName: PropTypes.string,
  customIcon: PropTypes.any,
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

Select.defaultProps = {
  componentCSSClassName: 'select',
  customIcon: null,
  value: null,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onKeyPress: null,
  disabled: false,
  className: null,
};

export default Select;
