'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Checkbox = _react2['default'].createClass({

    displayName: 'SynfrastructureCheckbox',

    propTypes: {
        id: _react2['default'].PropTypes.string.isRequired,
        name: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
        disabled: _react2['default'].PropTypes.bool,
        componentCSSClassName: _react2['default'].PropTypes.string,
        checked: _react2['default'].PropTypes.bool.isRequired,
        value: _react2['default'].PropTypes.any,
        onFocus: _react2['default'].PropTypes.func,
        onBlur: _react2['default'].PropTypes.func,
        onChange: _react2['default'].PropTypes.func,
        onKeyDown: _react2['default'].PropTypes.func,
        onKeyUp: _react2['default'].PropTypes.func,
        onKeyPress: _react2['default'].PropTypes.func,
        className: _react2['default'].PropTypes.string,
        tabIndex: _react2['default'].PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            name: null,
            disabled: false,
            componentCSSClassName: 'checkbox',
            checked: false,
            value: null,
            onFocus: null,
            onBlur: null,
            onChange: null,
            onKeyUp: null,
            onKeyDown: null,
            onKeyPress: null,
            className: null
        };
    },

    onChange: function onChange(event) {
        if (this.props.onChange) {
            this.props.onChange(this.props.id, this.props.checked, event);
        }
    },

    onFocus: function onFocus(event) {
        if (this.props.onFocus) {
            this.props.onFocus(this.props.id, this.props.checked, event);
        }
    },

    onBlur: function onBlur(event) {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.id, this.props.checked, event);
        }
    },

    onKeyUp: function onKeyUp(event) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(this.props.id, this.props.checked, event);
        }
    },

    onKeyDown: function onKeyDown(event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.props.id, this.props.checked, event);
        }
    },

    onKeyPress: function onKeyPress(event) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(this.props.id, this.props.checked, event);
        }
    },

    render: function render() {
        var classes = [this.props.componentCSSClassName, this.props.className].join(' ');

        return _react2['default'].createElement('input', _extends({}, this.props, {
            className: classes,
            id: this.props.id,
            name: this.props.name,
            type: 'checkbox',
            checked: this.props.checked,
            value: this.props.value,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onChange: this.onChange,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            onKeyPress: this.onKeyPress,
            disabled: this.props.disabled,
            tabIndex: this.props.tabIndex
        }));
    }

});

exports['default'] = Checkbox;
module.exports = exports['default'];