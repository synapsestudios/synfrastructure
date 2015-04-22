/* jshint globalstrict: true */
'use strict';

var _              = require('underscore');
var React          = require('react');
var FormInputMixin = require('../../../mixins/form-input-mixin');

module.exports = React.createClass({

    displayName : 'UI-Select',

    mixins : [
        FormInputMixin
    ],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        options               : React.PropTypes.arrayOf(
            React.PropTypes.shape({
                text     : React.PropTypes.string,
                value    : React.PropTypes.any,
                selected : React.PropTypes.bool
            })
        ).isRequired,
        componentCSSClassName : React.PropTypes.string,
        customIcon            : React.PropTypes.any,
        value                 : React.PropTypes.any,
        onFocus               : React.PropTypes.func,
        onBlur                : React.PropTypes.func,
        onChange              : React.PropTypes.func,
        className             : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName : 'select',
            customIcon            : null,
            value                 : null,
            onFocus               : null,
            onBlur                : null,
            onChange              : null,
            className             : null
        };
    },

    getSelectedValue : function()
    {
        var selectedOption;

        if (! _.isUndefined(this.props.value)) {
            return this.props.value;
        }

        selectedOption = _.findWhere(this.props.options, {isSelected : true});

        if (! selectedOption) {
            return;
        }

        return selectedOption.value;
    },

    renderSelectOptions : function()
    {
        if (! this.props.options) {
            return null;
        }

        return _.map(this.props.options, function(option, index) {
            return (
                <option
                    value = {option.value}
                    key   = {'select-option-' + index} >
                    {option.text}
                </option>
            );
        });
    },

    renderCustomSelect : function()
    {
        if (! this.props.customIcon) {
            return this.renderDefaultSelect();
        }

        return (
            <div className='select__custom--wrap'>
                {this.renderDefaultSelect()}
                <span className='select__custom--icon'>{this.props.customIcon}</span>
            </div>
        );
    },

    renderDefaultSelect : function()
    {
        var customSelect = (this.props.customIcon) ? this.props.componentCSSClassName + '__custom' : null;

        var classes = [
            this.props.componentCSSClassName,
            this.props.className,
            customSelect
        ].join(' ');

        return (
            <select
                className   = {classes}
                id          = {this.props.id}
                name        = {this.props.id}
                value       = {this.getSelectedValue()}
                onFocus     = {this.onFocus}
                onBlur      = {this.onBlur}
                onChange    = {this.onChange}
            >
                {this.renderSelectOptions()}
            </select>
        );
    },

    render : function()
    {
        return this.renderCustomSelect();
    }

});
