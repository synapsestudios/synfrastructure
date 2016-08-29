import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

let Checkbox = React.createClass({

    displayName : 'SynfrastructureCheckbox',

    propTypes : {
        id   : React.PropTypes.string.isRequired,
        name : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        disabled              : React.PropTypes.bool,
        componentCSSClassName : React.PropTypes.string,
        checked               : React.PropTypes.bool.isRequired,
        value                 : React.PropTypes.any,
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
            name                  : null,
            disabled              : false,
            componentCSSClassName : 'checkbox',
            checked               : false,
            value                 : undefined,
            onFocus               : null,
            onBlur                : null,
            onChange              : null,
            onKeyUp               : null,
            onKeyDown             : null,
            onKeyPress            : null,
            className             : null
        };
    },

    onChange(event)
    {
        if (this.props.onChange) {
            this.props.onChange(this.props.id, this.props.checked, event);
        }
    },

    onFocus(event)
    {
        if (this.props.onFocus) {
            this.props.onFocus(this.props.id, this.props.checked, event);
        }
    },

    onBlur(event)
    {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.id, this.props.checked, event);
        }
    },

    onKeyUp(event)
    {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(this.props.id, this.props.checked, event);
        }
    },

    onKeyDown(event)
    {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.props.id, this.props.checked, event);
        }
    },

    onKeyPress(event)
    {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(this.props.id, this.props.checked, event);
        }
    },

    render()
    {
        let classes = [
            this.props.componentCSSClassName,
            this.props.className
        ].join(' ');

        const checkboxProps = cloneDeep(this.props);
        delete checkboxProps.componentCSSClassName;

        return (
            <input
                {...checkboxProps}
                className   = {classes}
                id          = {this.props.id}
                name        = {this.props.name}
                type        = 'checkbox'
                checked     = {this.props.checked}
                value       = {this.props.value}
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

export default Checkbox;
