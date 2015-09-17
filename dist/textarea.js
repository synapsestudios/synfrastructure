'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var FormInputMixin = require('../mixins/form-input-mixin');

var TextArea = React.createClass({

    displayName: 'SynfrastructureTextArea',

    mixins: [FormInputMixin],

    propTypes: {
        id: React.PropTypes.string.isRequired,
        disabled: React.PropTypes.bool,
        componentCSSClassName: React.PropTypes.string,
        label: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        style: React.PropTypes.any,
        value: React.PropTypes.any,
        rows: React.PropTypes.number,
        resize: React.PropTypes.bool,
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
            componentCSSClassName: 'textarea',
            placeholder: null,
            style: null,
            value: null,
            rows: 4,
            resize: true,
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

    render: function render() {
        var classes = undefined,
            resizeClass = undefined;

        resizeClass = !this.props.resize ? this.props.componentCSSClassName + '--no-resize' : null;

        classes = [this.props.componentCSSClassName, this.props.componentCSSClassName + '--' + this.props.type, resizeClass, this.props.className].join(' ');

        return React.createElement('textarea', _extends({}, this.props, {
            className: classes,
            id: this.props.id,
            name: this.props.name,
            value: this.props.value,
            rows: this.props.rows,
            placeholder: this.props.placeholder,
            style: this.props.style,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onChange: this.onChange,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            onKeyPress: this.onKeyPress,
            disabled: this.props.disabled,
            tabIndex: this.props.tabIndex
        }));
    }

});

module.exports = TextArea;