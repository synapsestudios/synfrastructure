/* jshint globalstrict: true */
'use strict';

var React          = require('react');
var FormInputMixin = require('../../../mixins/form-input-mixin');

module.exports = React.createClass({

    displayName : 'TextArea',

    mixins : [
        FormInputMixin
    ],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        componentCSSClassName : React.PropTypes.string,
        label                 : React.PropTypes.string,
        placeholder           : React.PropTypes.string,
        value                 : React.PropTypes.any,
        rows                  : React.PropTypes.number,
        resize                : React.PropTypes.bool,
        onFocus               : React.PropTypes.func,
        onBlur                : React.PropTypes.func,
        onChange              : React.PropTypes.func
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName : 'textarea',
            label                 : null,
            placeholder           : null,
            value                 : null,
            rows                  : 4,
            resize                : true,
            onFocus               : null,
            onBlur                : null,
            onChange              : null
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
            <textarea
                className   = {classes}
                id          = {this.props.id}
                name        = {this.props.id}
                value       = {this.props.value}
                rows        = {this.props.rows}
                placeholder = {this.props.placeholder}
                onFocus     = {this.onFocus}
                onBlur      = {this.onBlur}
                onChange    = {this.onChange}
            />
        );
    }

});
