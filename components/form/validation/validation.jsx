/* jshint globalstrict: true */
'use strict';

var React    = require('react');
var classSet = require('react/lib/cx');

module.exports = React.createClass({

    displayName : 'Validation',

    propTypes : {
        componentCSSClassName        : React.PropTypes.string,
        show                         : React.PropTypes.bool,
        renderMessagesBeforeChildren : React.PropTypes.bool,
        messages                     : React.PropTypes.arrayOf(
            React.PropTypes.shape({
                messageType : React.PropTypes.string,
                message     : React.PropTypes.any
            })
        )
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName        : 'validation',
            show                         : false,
            renderMessagesBeforeChildren : false,
            messages                     : null
        };
    },

    renderValidationMessages : function()
    {
        var messages  = [],
            component = this,
            messageClasses;

        if (! this.props.show) {
            return null;
        }

        this.props.messages.map(function(message, index) {
            messageClasses = [
                component.props.componentCSSClassName + '__message',
                component.props.componentCSSClassName + '__message' + '--' + message.messageType
            ].join(' ');

            messages.push(
                <div
                    className = {messageClasses}
                    key       = {'validation-msg-' + index}
                >
                    {message.message}
                </div>
            );
        });

        return messages;
    },

    renderValidationContent : function()
    {
        var messages = this.renderValidationMessages();

        if (this.props.renderMessagesBeforeChildren) {
            return [
                {'message'          : messages},
                {'message-children' : this.props.children}
            ];
        }

        return [
            {'message-children' : this.props.children},
            {'message'          : messages}
        ];
    },

    render : function()
    {
        var classes,
            showClassName;

        showClassName = this.props.show ?
            this.props.componentCSSClassName + '--show' : null;

        classes = [
            this.props.componentCSSClassName,
            showClassName,
            this.props.className
        ].join(' ');

        return (
            <div className={classes}>
                {this.renderValidationContent()}
            </div>
        );
    }

});
