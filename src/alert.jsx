import React from 'react';
import clone from 'lodash/clone';

let Alert = React.createClass({

    displayName : 'SynfrastructureAlert',

    propTypes : {
        componentCSSClassName : React.PropTypes.string,
        message               : React.PropTypes.string,
        show                  : React.PropTypes.bool,
        canDismiss            : React.PropTypes.bool,
        dismissIcon           : React.PropTypes.any,
        onDismiss             : React.PropTypes.func,
        onClick               : React.PropTypes.func,
        className             : React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            componentCSSClassName : 'alert',
            message               : null,
            show                  : false,
            canDismiss            : false,
            dismissIcon           : String.fromCharCode(10761),
            onDismiss             : null,
            onClick               : null,
            className             : null
        };
    },

    renderDismissIcon()
    {
        if (! this.props.canDismiss) {
            return null;
        }

        return (
            <span
                className = {this.props.componentCSSClassName + '__dismiss'}
                onClick   = {this.props.onDismiss}
            >
                <span className={this.props.componentCSSClassName + '__dismiss__icon'}>
                    {this.props.dismissIcon}
                </span>
            </span>
        );
    },

    renderAlertChildren()
    {
        return (
            <div className={this.props.componentCSSClassName + '__content'}>
                {this.props.message}
                {this.props.children}
                {this.renderDismissIcon()}
            </div>
        );
    },

    render()
    {
        let AlertComponent,
            alertClasses;

        alertClasses = [
            this.props.componentCSSClassName,
            this.props.className
        ].join(' ');

        const alertProps = clone(this.props);
        delete alertProps.foo;
        delete alertProps.message;
        delete alertProps.componentCSSClassName;
        delete alertProps.canDismiss;
        delete alertProps.dismissIcon;
        delete alertProps.onDismiss;
        delete alertProps.show;

        AlertComponent = React.createElement(
            'div',
            {
                ...alertProps,
                className : alertClasses,
                onClick   : this.props.onClick
            },
            this.renderAlertChildren()
        );

        return AlertComponent;
    }

});

export default Alert;
