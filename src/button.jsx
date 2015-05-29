/* jshint globalstrict: true */
'use strict';

var React                      = require('react');
var SynfrastructureHelperMixin = require('../mixins/synfrastructure-helper-mixin');

module.exports = React.createClass({

    displayName : 'Synfrastructure-Button',

    mixins : [SynfrastructureHelperMixin],

    propTypes : {
        element : React.PropTypes.oneOf([
            'a',
            'button',
            'input',
            'span',
            'div'
        ]),
        attributes            : React.PropTypes.object,
        componentCSSClassName : React.PropTypes.string,
        disabled              : React.PropTypes.bool,
        className             : React.PropTypes.string,
        onClick               : React.PropTypes.func
    },

    getDefaultProps : function()
    {
        return {
            element               : 'a',
            attributes            : {},
            componentCSSClassName : 'button',
            disabled              : false,
            className             : null,
            onClick               : null
        };
    },

    render : function()
    {
        var Component,
            ComponentChildren,
            classes,
            childClassName,
            attributes = {};

        classes = [
            this.props.componentCSSClassName,
            this.props.className,
            this.props.disabled ?
                this.props.componentCSSClassName + '--disabled' : null
        ].join(' ');

        attributes = {
            className : classes,
            onClick   : this.props.onClick,
            disabled  : this.props.disabled
        };

        childClassName = this.props.componentCSSClassName + '__children';

        ComponentChildren = React.createElement(
            'span',
            {className : childClassName},
            this.props.children
        );

        Component = React.createElement(
            this.props.element,
            this.mergeAttributes(
                attributes,
                this.props.attributes
            ),
            ComponentChildren
        );

        return Component;
    }

});
