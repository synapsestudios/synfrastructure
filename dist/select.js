'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = require('lodash');
var React = require('react');
var FormInputMixin = require('../mixins/form-input-mixin');

var Select = React.createClass({

    displayName: 'SynfrastructureSelect',

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
        componentWrapCSSClassName: React.PropTypes.string,
        customIcon: React.PropTypes.any,
        value: React.PropTypes.any,
        onFocus: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
        onKeyUp: React.PropTypes.func,
        onKeyPress: React.PropTypes.func,
        className: React.PropTypes.string,
        tabIndex: React.PropTypes.string
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
        var selectedOption = undefined;

        if (this.props.value) {
            return this.props.value;
        }

        selectedOption = _.findWhere(this.props.options, { selected: true });

        if (!selectedOption) {
            return null;
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
        var classes = undefined;

        if (!this.props.customIcon) {
            return this.renderDefaultSelect();
        }

        classes = ['select--custom--wrap', this.props.componentWrapCSSClassName].join(' ');

        return React.createElement(
            'div',
            { className: classes },
            this.renderDefaultSelect(),
            React.createElement(
                'span',
                { className: 'select--custom--icon' },
                this.props.customIcon
            )
        );
    },

    renderDefaultSelect: function renderDefaultSelect() {
        var classes = undefined,
            customSelect = undefined;

        customSelect = this.props.customIcon ? this.props.componentCSSClassName + '--custom' : null;

        classes = [this.props.componentCSSClassName, this.props.className, customSelect].join(' ');

        return React.createElement(
            'select',
            _extends({}, this.props, {
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
                onKeyPress: this.onKeyPress,
                tabIndex: this.props.tabIndex
            }),
            this.renderSelectOptions()
        );
    },

    render: function render() {
        return this.renderCustomSelect();
    }

});

module.exports = Select;