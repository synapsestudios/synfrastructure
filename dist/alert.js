'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashCloneDeep = require('lodash/cloneDeep');

var _lodashCloneDeep2 = _interopRequireDefault(_lodashCloneDeep);

var Alert = _react2['default'].createClass({

    displayName: 'SynfrastructureAlert',

    propTypes: {
        componentCSSClassName: _react2['default'].PropTypes.string,
        message: _react2['default'].PropTypes.string,
        show: _react2['default'].PropTypes.bool,
        canDismiss: _react2['default'].PropTypes.bool,
        dismissIcon: _react2['default'].PropTypes.any,
        onDismiss: _react2['default'].PropTypes.func,
        onClick: _react2['default'].PropTypes.func,
        className: _react2['default'].PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            componentCSSClassName: 'alert',
            message: null,
            show: false,
            canDismiss: false,
            dismissIcon: String.fromCharCode(10761),
            onDismiss: null,
            onClick: null,
            className: null
        };
    },

    renderDismissIcon: function renderDismissIcon() {
        if (!this.props.canDismiss) {
            return null;
        }

        return _react2['default'].createElement(
            'span',
            {
                className: this.props.componentCSSClassName + '__dismiss',
                onClick: this.props.onDismiss
            },
            _react2['default'].createElement(
                'span',
                { className: this.props.componentCSSClassName + '__dismiss__icon' },
                this.props.dismissIcon
            )
        );
    },

    renderAlertChildren: function renderAlertChildren() {
        return _react2['default'].createElement(
            'div',
            { className: this.props.componentCSSClassName + '__content' },
            this.props.message,
            this.props.children,
            this.renderDismissIcon()
        );
    },

    render: function render() {
        var AlertComponent = undefined,
            alertClasses = undefined;

        alertClasses = [this.props.componentCSSClassName, this.props.className].join(' ');

        var alertProps = _lodashCloneDeep2['default'](this.props);
        delete alertProps.foo;
        delete alertProps.message;
        delete alertProps.componentCSSClassName;
        delete alertProps.canDismiss;
        delete alertProps.dismissIcon;
        delete alertProps.onDismiss;
        delete alertProps.show;

        AlertComponent = _react2['default'].createElement('div', _extends({}, alertProps, {
            className: alertClasses,
            onClick: this.props.onClick
        }), this.renderAlertChildren());

        return AlertComponent;
    }

});

exports['default'] = Alert;
module.exports = exports['default'];