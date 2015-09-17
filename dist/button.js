'use strict';

var React = require('react');
var SynfrastructureHelperMixin = require('../mixins/synfrastructure-helper-mixin');

var Button = React.createClass({

    displayName: 'SynfrastructureButton',

    mixins: [SynfrastructureHelperMixin],

    propTypes: {
        element: React.PropTypes.oneOf(['a', 'button', 'input', 'span', 'div']),
        attributes: React.PropTypes.object,
        componentCSSClassName: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        className: React.PropTypes.string,
        onClick: React.PropTypes.func,
        tabIndex: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            element: 'a',
            attributes: {},
            componentCSSClassName: 'button',
            disabled: false,
            className: null,
            onClick: null
        };
    },

    render: function render() {
        var Component,
            ComponentChildren,
            classes,
            childClassName,
            attributes = {};

        classes = [this.props.componentCSSClassName, this.props.className, this.props.disabled ? this.props.componentCSSClassName + '--disabled' : null].join(' ');

        attributes = {
            className: classes,
            onClick: this.props.onClick,
            disabled: this.props.disabled,
            tabIndex: this.props.tabIndex
        };

        childClassName = this.props.componentCSSClassName + '__children';

        ComponentChildren = React.createElement('span', { className: childClassName }, this.props.children);

        Component = React.createElement(this.props.element, this.mergeAttributes(attributes, this.props.attributes), ComponentChildren);

        return Component;
    }

});

module.exports = Button;