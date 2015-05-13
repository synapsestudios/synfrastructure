/* jshint globalstrict: true */
'use strict';

var React          = require('react');
var FormInputMixin = require('../../../mixins/form-input-mixin');

module.exports = React.createClass({

    displayName : 'UI-TextArea',

    mixins : [
        FormInputMixin
    ],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        disabled              : React.PropTypes.bool,
        componentCSSClassName : React.PropTypes.string,
        label                 : React.PropTypes.string,
        placeholder           : React.PropTypes.string,
        value                 : React.PropTypes.any,
        rows                  : React.PropTypes.number,
        resize                : React.PropTypes.bool,
        onFocus               : React.PropTypes.func,
        onBlur                : React.PropTypes.func,
        onChange              : React.PropTypes.func,
        className             : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName : 'textarea',
            placeholder           : null,
            value                 : null,
            rows                  : 4,
            resize                : true,
            onFocus               : null,
            onBlur                : null,
            onChange              : null,
            disabled              : false,
            className             : null
        };
    },

    render : function()
    {
        var classes,
            resizeClass;

        resizeClass = ! this.props.resize ?
            this.props.componentCSSClassName + '--no-resize' : null;

        classes = [
            this.props.componentCSSClassName,
            this.props.componentCSSClassName + '--' + this.props.type,
            resizeClass,
            this.props.className
        ].join(' ');

        return (
            React.createElement(
                'textarea',
                {
                    disabled    : this.props.disabled,
                    className   : classes,
                    id          : this.props.id,
                    value       : this.props.value,
                    rows        : this.props.rows,
                    placeholder : this.props.placeholder,
                    onFocus     : this.onFocus,
                    onBlur      : this.onBlur,
                    onChange    : this.onChange
                },
                this.props.children
            )
        );
    }

});
