'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var Button = React.createClass({

    displayName: 'SynfrastructureButton',

    propTypes: {
        element: React.PropTypes.oneOf(['a', 'button', 'input', 'span', 'div']),
        componentCSSClassName: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        className: React.PropTypes.string,
        onClick: React.PropTypes.func,
        tabIndex: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            element: 'a',
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

        ComponentChildren = React.createElement('span', { className: childClassName }, this.props.children);

        Component = React.createElement(this.props.element, _extends({}, this.props, {
            className: classes,
            onClick: this.props.onClick,
            disabled: this.props.disabled,
            tabIndex: this.props.tabIndex
        }), ComponentChildren);

        return Component;
    }

});

module.exports = Button;