/* jshint globalstrict: true */
'use strict';

var React                      = require('react');
var classSet                   = require('react/lib/cx');
var SynfrastructureHelperMixin = require('../../../mixins/synfrastructure-helper-mixin');

module.exports = React.createClass({

    displayName : 'UI-Validation',

    mixins : [SynfrastructureHelperMixin],

    propTypes : {
        componentCSSClassName : React.PropTypes.string,
        show                  : React.PropTypes.bool,
        renderMessages        : React.PropTypes.oneOf(['before', 'after']),
        messageContainer      : React.PropTypes.func,
        messageContainerProps : React.PropTypes.object,
        messages              : React.PropTypes.arrayOf(
            React.PropTypes.shape({
                messageType : React.PropTypes.string,
                message     : React.PropTypes.any
            })
        )
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName : 'validation',
            show                  : false,
            renderMessages        : 'after',
            messageContainer      : null,
            messageContainerProps : null,
            messages              : null
        };
    },

    renderValidationMessages : function()
    {
        var messages     = [],
            component    = this,
            messageProps = {},
            messageElement,
            messageClasses;

        if (! this.props.show) {
            return null;
        }

        messageElement = this.props.messageContainer ?
            this.props.messageContainer : 'div';

        this.props.messages.map(function(message, index) {
            messageProps = {
                className : messageClasses,
                key       : 'validation-msg-' + index
            };

            messageClasses = [
                component.props.componentCSSClassName + '__message',
                component.props.componentCSSClassName + '__message' + '--' + message.messageType
            ].join(' ');

            messages.push(
                React.createElement(
                    messageElement,
                    component.mergeAttributes(
                        messageProps,
                        component.props.messageContainerProps
                    ),
                    message.message
                )
            );
        });

        return messages;
    },

    renderValidationContent : function()
    {
        var messages       = this.renderValidationMessages(),
            orderdChildren = [];

        orderdChildren = [
            {'message-children' : this.props.children},
            {'message'          : messages}
        ];

        if (this.props.renderMessages === 'before') {
            return orderdChildren.reverse();
        }

        return orderdChildren;
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
            React.createElement(
                'div',
                {
                    className : classes
                },
                this.renderValidationContent()
            )
        );
    }

});
