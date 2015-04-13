/* jshint globalstrict: true */
'use strict';

var React          = require('react');
var FormInputMixin = require('../../../mixins/form-input-mixin');

module.exports = React.createClass({

    displayName : 'Input',

    mixins : [
        FormInputMixin
    ],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        componentCSSClassName : React.PropTypes.string,
        label                 : React.PropTypes.string,
        placeholder           : React.PropTypes.string,
        value                 : React.PropTypes.any,
        onFocus               : React.PropTypes.func,
        onBlur                : React.PropTypes.func,
        onChange              : React.PropTypes.func,
        type                  : React.PropTypes.oneOf([
            'date',
            'datetime',
            'datetime-local',
            'date',
            'email',
            'month',
            'number',
            'password',
            'search',
            'tel',
            'text',
            'url',
            'week'
        ])
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName : 'input',
            label                 : null,
            placeholder           : null,
            value                 : null,
            onFocus               : null,
            onBlur                : null,
            onChange              : null,
            type                  : 'text'
        };
    },

    render : function()
    {
        var classes = [
            this.props.componentCSSClassName,
            this.props.componentCSSClassName + '--' + this.props.type,
            this.props.className
        ].join(' ');

        return (
            <input
                className   = {classes}
                id          = {this.props.id}
                name        = {this.props.id}
                type        = {this.props.type}
                value       = {this.props.value}
                placeholder = {this.props.placeholder}
                onFocus     = {this.onFocus}
                onBlur      = {this.onBlur}
                onChange    = {this.onChange}
            />
        );
    }

});
