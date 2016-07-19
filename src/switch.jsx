import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

let Switch = React.createClass({

    displayName : 'Synfrastructure-Switch',

    propTypes : {
        id   : React.PropTypes.string.isRequired,
        name : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        disabled              : React.PropTypes.bool,
        componentCSSClassName : React.PropTypes.string,
        switchTextOn          : React.PropTypes.string,
        switchTextOff         : React.PropTypes.string,
        checked               : React.PropTypes.bool.isRequired,
        value                 : React.PropTypes.any,
        onClick               : React.PropTypes.func,
        onFocus               : React.PropTypes.func,
        onBlur                : React.PropTypes.func,
        onChange              : React.PropTypes.func,
        onKeyDown             : React.PropTypes.func,
        onKeyUp               : React.PropTypes.func,
        onKeyPress            : React.PropTypes.func,
        className             : React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            name                  : null,
            disabled              : false,
            componentCSSClassName : 'switch',
            switchTextOn          : 'on',
            switchTextOff         : 'off',
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
            this.props.onChange(this.props.checked, event);
        }
    },

    onFocus(event)
    {
        if (this.props.onFocus) {
            this.props.onFocus(this.props.checked, event);
        }
    },

    onBlur(event)
    {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.checked, event);
        }
    },

    onKeyUp(event)
    {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(this.props.checked, event);
        }
    },

    onKeyDown(event)
    {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.props.checked, event);
        }
    },

    onKeyPress(event)
    {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(this.props.checked, event);
        }
    },

    render()
    {
        var classes = [
            this.props.componentCSSClassName,
            this.props.className
        ].join(' ');

        const switchProps = cloneDeep(this.props);
        delete switchProps.componentCSSClassName;
        delete switchProps.switchTextOn;
        delete switchProps.switchTextOff;

        return (
            <div className={classes}>
                <input
                    {...switchProps}
                    className      = {this.props.componentCSSClassName + '__checkbox'}
                    id             = {this.props.id}
                    name           = {this.props.name}
                    type           = 'checkbox'
                    checked        = {this.props.checked}
                    value          = {this.props.value}
                    onFocus        = {this.onFocus}
                    onBlur         = {this.onBlur}
                    onChange       = {this.onChange}
                    onKeyUp        = {this.onKeyUp}
                    onKeyDown      = {this.onKeyDown}
                    onKeyPress     = {this.onKeyPress}
                    disabled       = {this.props.disabled}
                />
                <label
                    className = {this.props.componentCSSClassName + '__label'}
                    htmlFor   = {this.props.name}
                    onClick   = {this.props.onClick}
                >
                    <span
                        className        = {this.props.componentCSSClassName + '__inner'}
                        data-content-on  = {this.props.switchTextOn}
                        data-content-off = {this.props.switchTextOff}
                    />
                    <span className={this.props.componentCSSClassName + '__toggle'}></span>
                </label>
            </div>
        );
    }

});

export default Switch;
