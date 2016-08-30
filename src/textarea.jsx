import React from 'react';
import clone from 'lodash/clone';
import FormInputMixin from '../mixins/form-input-mixin';

let TextArea = React.createClass({

    displayName : 'SynfrastructureTextArea',

    mixins : [FormInputMixin],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        disabled              : React.PropTypes.bool,
        componentCSSClassName : React.PropTypes.string,
        label                 : React.PropTypes.string,
        placeholder           : React.PropTypes.string,
        style                 : React.PropTypes.any,
        value                 : React.PropTypes.any,
        rows                  : React.PropTypes.number,
        resize                : React.PropTypes.bool,
        onFocus               : React.PropTypes.func,
        onBlur                : React.PropTypes.func,
        onChange              : React.PropTypes.func,
        onKeyDown             : React.PropTypes.func,
        onKeyUp               : React.PropTypes.func,
        onKeyPress            : React.PropTypes.func,
        className             : React.PropTypes.string,
        tabIndex              : React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            componentCSSClassName : 'textarea',
            placeholder           : null,
            style                 : null,
            value                 : undefined,
            rows                  : 4,
            resize                : true,
            onFocus               : null,
            onBlur                : null,
            onChange              : null,
            onKeyUp               : null,
            onKeyDown             : null,
            onKeyPress            : null,
            disabled              : false,
            className             : null
        };
    },

    render()
    {
        let classes,
            resizeClass;

        resizeClass = ! this.props.resize ?
            this.props.componentCSSClassName + '--no-resize' : null;

        classes = [
            this.props.componentCSSClassName,
            this.props.componentCSSClassName + '--' + this.props.type,
            resizeClass,
            this.props.className
        ].join(' ');

        const textareaProps = clone(this.props);
        delete textareaProps.componentCSSClassName;
        delete textareaProps.resize;

        return (
            <textarea
                {...textareaProps}
                className   = {classes}
                id          = {this.props.id}
                name        = {this.props.name}
                value       = {this.props.value}
                rows        = {this.props.rows}
                placeholder = {this.props.placeholder}
                style       = {this.props.style}
                onFocus     = {this.onFocus}
                onBlur      = {this.onBlur}
                onChange    = {this.onChange}
                onKeyUp     = {this.onKeyUp}
                onKeyDown   = {this.onKeyDown}
                onKeyPress  = {this.onKeyPress}
                disabled    = {this.props.disabled}
                tabIndex    = {this.props.tabIndex}
            />
        );
    }

});

export default TextArea;
