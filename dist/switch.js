/* jshint globalstrict: true */
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

module.exports = React.createClass({

    displayName: 'Synfrastructure-Switch',

    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
        disabled: React.PropTypes.bool,
        componentCSSClassName: React.PropTypes.string,
        switchTextOn: React.PropTypes.string,
        switchTextOff: React.PropTypes.string,
        checked: React.PropTypes.bool.isRequired,
        value: React.PropTypes.any,
        onClick: React.PropTypes.func,
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
            name: null,
            disabled: false,
            componentCSSClassName: 'switch',
            switchTextOn: 'on',
            switchTextOff: 'off',
            checked: null,
            defaultChecked: false,
            value: null,
            onFocus: null,
            onBlur: null,
            onChange: null,
            onKeyUp: null,
            onKeyDown: null,
            onKeyPress: null,
            className: null
        };
    },

    onChange: function onChange(event) {
        if (this.props.onChange) {
            this.props.onChange(this.props.checked, event);
        }
    },

    onFocus: function onFocus(event) {
        if (this.props.onFocus) {
            this.props.onFocus(this.props.checked, event);
        }
    },

    onBlur: function onBlur(event) {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.checked, event);
        }
    },

    onKeyUp: function onKeyUp(event) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(this.props.checked, event);
        }
    },

    onKeyDown: function onKeyDown(event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.props.checked, event);
        }
    },

    onKeyPress: function onKeyPress(event) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(this.props.checked, event);
        }
    },

    render: function render() {
        var classes = [this.props.componentCSSClassName, this.props.className].join(' ');

        return React.createElement(
            'div',
            { className: classes },
            React.createElement('input', _extends({}, this.props, {
                className: this.props.componentCSSClassName + '__checkbox',
                id: this.props.id,
                name: this.props.name,
                type: 'checkbox',
                checked: this.props.checked,
                defaultChecked: this.props.checked,
                value: this.props.value,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                onChange: this.onChange,
                onKeyUp: this.onKeyUp,
                onKeyDown: this.onKeyDown,
                onKeyPress: this.onKeyPress,
                disabled: this.props.disabled
            })),
            React.createElement(
                'label',
                {
                    className: this.props.componentCSSClassName + '__label',
                    htmlFor: this.props.name,
                    onClick: this.props.onClick
                },
                React.createElement('span', {
                    className: this.props.componentCSSClassName + '__inner',
                    'data-content-on': this.props.switchTextOn,
                    'data-content-off': this.props.switchTextOff
                }),
                React.createElement('span', { className: this.props.componentCSSClassName + '__toggle' })
            )
        );
    }

});