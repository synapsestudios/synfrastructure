/* jshint globalstrict: true */
'use strict';

var React = require('react');

var Radio = React.createClass({

    displayName: 'Radio',

    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
        disabled: React.PropTypes.bool,
        componentCSSClassName: React.PropTypes.string,
        checked: React.PropTypes.bool.isRequired,
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
            name: null,
            disabled: false,
            componentCSSClassName: 'radio',
            checked: false,
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
            this.props.onChange(this.props.id, this.props.checked, event);
        }
    },

    onFocus: function onFocus(event) {
        if (this.props.onFocus) {
            this.props.onFocus(this.props.id, this.props.checked, event);
        }
    },

    onBlur: function onBlur(event) {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.id, this.props.checked, event);
        }
    },

    onKeyUp: function onKeyUp(event) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(this.props.id, this.props.checked, event);
        }
    },

    onKeyDown: function onKeyDown(event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.props.id, this.props.checked, event);
        }
    },

    onKeyPress: function onKeyPress(event) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(this.props.id, this.props.checked, event);
        }
    },

    render: function render() {
        var classes = [this.props.componentCSSClassName, this.props.className].join(' ');

        return React.createElement('input', {
            className: classes,
            id: this.props.id,
            name: this.props.name,
            type: 'radio',
            checked: this.props.checked,
            value: this.props.value,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onChange: this.onChange,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            onKeyPress: this.onKeyPress,
            disabled: this.props.disabled
        });
    }

});

module.exports = Radio;