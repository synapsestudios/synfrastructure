'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashClone = require('lodash/clone');

var _lodashClone2 = _interopRequireDefault(_lodashClone);

var _mixinsFormInputMixin = require('../mixins/form-input-mixin');

var _mixinsFormInputMixin2 = _interopRequireDefault(_mixinsFormInputMixin);

var TextArea = _react2['default'].createClass({

    displayName: 'SynfrastructureTextArea',

    mixins: [_mixinsFormInputMixin2['default']],

    propTypes: {
        id: _react2['default'].PropTypes.string.isRequired,
        disabled: _react2['default'].PropTypes.bool,
        componentCSSClassName: _react2['default'].PropTypes.string,
        label: _react2['default'].PropTypes.string,
        placeholder: _react2['default'].PropTypes.string,
        style: _react2['default'].PropTypes.any,
        value: _react2['default'].PropTypes.any,
        rows: _react2['default'].PropTypes.number,
        resize: _react2['default'].PropTypes.bool,
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
            className: null
        };
    },

    render: function render() {
        var classes = undefined,
            resizeClass = undefined;

        resizeClass = !this.props.resize ? this.props.componentCSSClassName + '--no-resize' : null;

        classes = [this.props.componentCSSClassName, this.props.componentCSSClassName + '--' + this.props.type, resizeClass, this.props.className].join(' ');

        var textareaProps = _lodashClone2['default'](this.props);
        delete textareaProps.componentCSSClassName;
        delete textareaProps.resize;

        return _react2['default'].createElement('textarea', _extends({}, textareaProps, {
            className: classes,
            id: this.props.id,
            name: this.props.name,
            value: this.props.value,
            rows: this.props.rows,
            placeholder: this.props.placeholder,
            style: this.props.style,
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

exports['default'] = TextArea;
module.exports = exports['default'];