'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var Alert = React.createClass({

    displayName: 'SynfrastructureAlert',

    propTypes: {
        componentCSSClassName: React.PropTypes.string,
        message: React.PropTypes.string,
        show: React.PropTypes.bool,
        canDismiss: React.PropTypes.bool,
        dismissIcon: React.PropTypes.any,
        onDismiss: React.PropTypes.func,
        onClick: React.PropTypes.func,
        className: React.PropTypes.string
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

        return React.createElement(
            'span',
            {
                className: this.props.componentCSSClassName + '__dismiss',
                onClick: this.props.onDismiss
            },
            React.createElement(
                'span',
                { className: this.props.componentCSSClassName + '__dismiss__icon' },
                this.props.dismissIcon
            )
        );
    },

    renderAlertChildren: function renderAlertChildren() {
        return React.createElement(
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

        AlertComponent = React.createElement('div', _extends({}, this.props, {
            className: alertClasses,
            onClick: this.props.onClick
        }), this.renderAlertChildren());

        return AlertComponent;
    }

});

module.exports = Alert;