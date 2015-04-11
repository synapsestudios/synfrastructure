/* jshint globalstrict: true */
'use strict';

var React                      = require('react');
var classSet                   = require('react/lib/cx');
var SynfrastructureHelperMixin = require('../../mixins/synfrastructure-helper-mixin');

module.exports = React.createClass({

    displayName : 'Button',

    mixins : [SynfrastructureHelperMixin],

    propTypes : {
        element    : React.PropTypes.any,
        attributes : React.PropTypes.object,
        size       : React.PropTypes.string,
        modifier   : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.array
        ]),
        disabled  : React.PropTypes.bool,
        className : React.PropTypes.string,
        onClick   : React.PropTypes.func
    },

    getDefaultProps : function()
    {
        return {
            element    : 'a',
            attributes : {},
            size       : null,
            modifier   : null,
            disabled   : false,
            className  : null,
            onClick    : null
        };
    },

    render : function()
    {
        var Component,
            classes,
            optionalClasses,
            attributes = {};

        optionalClasses = classSet({
            'button--disabled' : this.props.disabled
        });

        classes = [
            'button',
            this.props.modifier,
            this.props.className,
            optionalClasses
        ].join(' ');

        attributes = {
            className : classes,
            onClick   : this.props.onClick,
            disabled  : this.props.disabled
        };

        Component = React.createElement(
            this.props.element,
            this.mergeAttributes(attributes, this.props.attributes),
            this.props.children
        );

        return Component;
    }

});
