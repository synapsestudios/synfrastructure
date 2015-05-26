/* jshint globalstrict: true */
'use strict';

var React                      = require('react');
var classSet                   = require('react/lib/cx');
var SynfrastructureHelperMixin = require('../mixins/synfrastructure-helper-mixin');

module.exports = React.createClass({

    displayName : 'Synfrastructure-Validation',

    mixins : [SynfrastructureHelperMixin],

    propTypes : {
        componentCSSClassName : React.PropTypes.string,
        renderMessages        : React.PropTypes.oneOf(['before', 'after']),
        messageContainer      : React.PropTypes.func,
        messageContainerProps : React.PropTypes.object,
        validation : React.PropTypes.shape({
            status   : React.PropTypes.string,
            messages : React.PropTypes.array
        })
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName : 'validation',
            renderMessages        : 'after',
            messageContainer      : null,
            messageContainerProps : null,
            validation            : null
        };
    },

    renderValidationMessages : function()
    {
        var messages     = [],
            component    = this,
            messageProps = {},
            messageElement,
            messageClasses;

        if (! this.props.validation || ! this.props.validation.messages) {
            return null;
        }

        messageElement = this.props.messageContainer ?
            this.props.messageContainer : 'div';

        this.props.validation.messages.map(function(message, index) {
            messageClasses = [
                component.props.componentCSSClassName + '__message',
                component.props.componentCSSClassName + '__message--' + component.props.validation.status
            ].join(' ');

            messageProps = {
                className : messageClasses,
                key       : 'validation-msg-' + index
            };

            messages.push(
                React.createElement(
                    messageElement,
                    component.mergeAttributes(
                        messageProps,
                        component.props.messageContainerProps
                    ),
                    message
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
            showClass,
            statusClass,
            messages;

        showClass = this.props.validation ?
            this.props.componentCSSClassName + '--show' : null;

        statusClass = this.props.validation ?
            this.props.componentCSSClassName + '--' + this.props.validation.status : null;

        classes = [
            this.props.componentCSSClassName,
            showClass,
            statusClass,
            this.props.className
        ].join(' ').trim();

        messages = this.renderValidationContent();

        return (
            React.createElement(
                'div',
                {
                    className : classes
                },
                messages
            )
        );
    }

});
