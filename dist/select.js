/* jshint globalstrict: true */
'use strict';

var _ = require('lodash');
var React = require('react');
var FormInputMixin = require('../mixins/form-input-mixin');

module.exports = React.createClass({

    displayName: 'Synfrastructure-Select',

    mixins: [FormInputMixin],

    propTypes: {
        id: React.PropTypes.string.isRequired,
        disabled: React.PropTypes.bool,
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string,
            value: React.PropTypes.any,
            selected: React.PropTypes.bool
        })).isRequired,
        componentCSSClassName: React.PropTypes.string,
        customIcon: React.PropTypes.any,
        value: React.PropTypes.any,
        onFocus: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
        onKeyUp: React.PropTypes.func,
        onKeyPress: React.PropTypes.func,
        className: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            componentCSSClassName: 'select',
            customIcon: null,
            value: null,
            onFocus: null,
            onBlur: null,
            onChange: null,
            onKeyUp: null,
            onKeyDown: null,
            onKeyPress: null,
            disabled: false,
            className: null
        };
    },

    getSelectedValue: function getSelectedValue() {
        var selectedOption;

        if (this.props.value) {
            return this.props.value;
        }

        selectedOption = _.findWhere(this.props.options, { selected: true });

        if (!selectedOption) {
            return;
        }

        return selectedOption.value;
    },

    renderSelectOptions: function renderSelectOptions() {
        if (!this.props.options) {
            return null;
        }

        return _.map(this.props.options, function (option, index) {
            return React.createElement(
                'option',
                {
                    value: option.value,
                    key: option.text
                },
                option.text
            );
        });
    },

    renderCustomSelect: function renderCustomSelect() {
        if (!this.props.customIcon) {
            return this.renderDefaultSelect();
        }

        return React.createElement(
            'div',
            { className: 'select__custom--wrap' },
            this.renderDefaultSelect(),
            React.createElement(
                'span',
                { className: 'select__custom--icon' },
                this.props.customIcon
            )
        );
    },

    renderDefaultSelect: function renderDefaultSelect() {
        var classes, customSelect;

        customSelect = this.props.customIcon ? this.props.componentCSSClassName + '__custom' : null;

        classes = [this.props.componentCSSClassName, this.props.className, customSelect].join(' ');

        return React.createElement(
            'select',
            {
                disabled: this.props.disabled,
                className: classes,
                id: this.props.id,
                name: this.props.id,
                value: this.getSelectedValue(),
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                onChange: this.onChange,
                onKeyUp: this.onKeyUp,
                onKeyDown: this.onKeyDown,
                onKeyPress: this.onKeyPress
            },
            this.renderSelectOptions()
        );
    },

    render: function render() {
        return this.renderCustomSelect();
    }

});