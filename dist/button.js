'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Button = _react2['default'].createClass({

    displayName: 'SynfrastructureButton',

    propTypes: {
        element: _react2['default'].PropTypes.oneOf(['a', 'button', 'input', 'span', 'div']),
        componentCSSClassName: _react2['default'].PropTypes.string,
        disabled: _react2['default'].PropTypes.bool,
        className: _react2['default'].PropTypes.string,
        onClick: _react2['default'].PropTypes.func,
        tabIndex: _react2['default'].PropTypes.string,
        children: _react2['default'].PropTypes.any
    },

    getDefaultProps: function getDefaultProps() {
        return {
            element: 'button',
            componentCSSClassName: 'button',
            disabled: false,
            className: null,
            onClick: null
        };
    },

    render: function render() {
        var Component = undefined,
            ComponentChildren = undefined,
            classes = undefined,
            childClassName = undefined;

        classes = [this.props.componentCSSClassName, this.props.className, this.props.disabled ? this.props.componentCSSClassName + '--disabled' : null].join(' ');

        childClassName = this.props.componentCSSClassName + '__children';

        ComponentChildren = _react2['default'].createElement('span', { className: childClassName }, this.props.children);

        Component = _react2['default'].createElement(this.props.element, _extends({}, this.props, {
            className: classes,
            onClick: this.props.onClick,
            disabled: this.props.disabled,
            tabIndex: this.props.tabIndex
        }), ComponentChildren);

        return Component;
    }

});

exports['default'] = Button;
module.exports = exports['default'];