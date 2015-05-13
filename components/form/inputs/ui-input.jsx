/* jshint globalstrict: true */
'use strict';

var React          = require('react');
var FormInputMixin = require('../../../mixins/form-input-mixin');

module.exports = React.createClass({

    displayName : 'UI-Input',

    mixins : [
        FormInputMixin
    ],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        disabled              : React.PropTypes.bool,
        componentCSSClassName : React.PropTypes.string,
        placeholder           : React.PropTypes.string,
        value                 : React.PropTypes.any,
        onFocus               : React.PropTypes.func,
        onBlur                : React.PropTypes.func,
        onChange              : React.PropTypes.func,
        className             : React.PropTypes.string,
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
            placeholder           : null,
            value                 : null,
            onFocus               : null,
            onBlur                : null,
            onChange              : null,
            className             : null,
            disabled              : false,
            type                  : 'text'
        };
    },

    render : function()
    {
        var classes,
            Component;

        classes = [
            this.props.componentCSSClassName,
            this.props.componentCSSClassName + '--' + this.props.type,
            this.props.className
        ].join(' ');

        Component = React.createElement(
            'input',
            {
                className   : classes,
                id          : this.props.id,
                placeholder : this.props.placeholder,
                value       : this.props.value,
                onFocus     : this.onFocus,
                onBlur      : this.onBlur,
                onChange    : this.onChange,
                disabled    : this.props.disabled,
                type        : this.props.type
            },
            this.children
        );

        return Component;
    }

});
