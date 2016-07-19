'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashCloneDeep = require('lodash/cloneDeep');

var _lodashCloneDeep2 = _interopRequireDefault(_lodashCloneDeep);

var _mixinsFormInputMixin = require('../mixins/form-input-mixin');

var _mixinsFormInputMixin2 = _interopRequireDefault(_mixinsFormInputMixin);

var Input = _react2['default'].createClass({

    displayName: 'SynfrastructureInput',

    mixins: [_mixinsFormInputMixin2['default']],

    propTypes: {
        id: _react2['default'].PropTypes.string.isRequired,
        disabled: _react2['default'].PropTypes.bool,
        componentCSSClassName: _react2['default'].PropTypes.string,
        placeholder: _react2['default'].PropTypes.string,
        value: _react2['default'].PropTypes.any,
        onFocus: _react2['default'].PropTypes.func,
        onBlur: _react2['default'].PropTypes.func,
        onChange: _react2['default'].PropTypes.func,
        onKeyDown: _react2['default'].PropTypes.func,
        onKeyUp: _react2['default'].PropTypes.func,
        onKeyPress: _react2['default'].PropTypes.func,
        tabIndex: _react2['default'].PropTypes.string,
        className: _react2['default'].PropTypes.string,
        type: _react2['default'].PropTypes.oneOf(['date', 'datetime', 'datetime-local', 'date', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'url', 'week'])
    },

    getDefaultProps: function getDefaultProps() {
        return {
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
            type: 'text'
        };
    },

    render: function render() {
        var classes = [this.props.componentCSSClassName, this.props.componentCSSClassName + '--' + this.props.type, this.props.className].join(' ');

        var inputProps = _lodashCloneDeep2['default'](this.props);
        delete inputProps.componentCSSClassName;

        return _react2['default'].createElement('input', _extends({}, inputProps, {
            className: classes,
            id: this.props.id,
            name: this.props.name,
            placeholder: this.props.placeholder,
            value: this.props.value,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onChange: this.onChange,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            onKeyPress: this.onKeyPress,
            disabled: this.props.disabled,
            type: this.props.type,
            tabIndex: this.props.tabIndex
        }));
    }

});

exports['default'] = Input;
module.exports = exports['default'];