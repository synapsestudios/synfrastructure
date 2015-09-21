'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var Label = React.createClass({

    displayName: 'SynfrastructureFormLabel',

    propTypes: {
        htmlFor: React.PropTypes.string.isRequired,
        componentCSSClassName: React.PropTypes.string,
        text: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            componentCSSClassName: 'label',
            text: null
        };
    },

    render: function render() {
        var Component = undefined,
            classes = undefined;

        classes = [this.props.componentCSSClassName, this.props.className].join(' ');

        Component = React.createElement('label', _extends({}, this.props, {
            htmlFor: this.props.htmlFor,
            className: classes
        }), [this.props.text, this.props.children]);

        return Component;
    }

});

module.exports = Label;