import React                      from 'react';
import CreateFragment             from 'react-addons-create-fragment';
import SynfrastructureHelperMixin from '../mixins/synfrastructure-helper-mixin';

let Validation = React.createClass({

    displayName : 'Synfrastructure-Validation',

    mixins : [SynfrastructureHelperMixin],

    propTypes : {
        componentCSSClassName : React.PropTypes.string,
        renderMessages        : React.PropTypes.oneOf(['before', 'after']),
        messageContainer      : React.PropTypes.func,
        messageContainerProps : React.PropTypes.object,
        errors : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string)
        ]),
        successMessages : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string)
        ]),
        warnings : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string)
        ])
    },

    getDefaultProps()
    {
        return {
            componentCSSClassName : 'validation',
            renderMessages        : 'after',
            messageContainer      : null,
            messageContainerProps : null,
            validation            : null
        };
    },

    renderMessage(messages, messageType)
    {
        let messageProps = {}, messageElement, messageClasses, renderedMessages = [];

        if (messages) {
            messages = Array.isArray(messages) ? messages : [messages];

            messageElement = this.props.messageContainer ?
                this.props.messageContainer : 'div';

            messages.map((message, index) => {
                messageClasses = [
                    this.props.componentCSSClassName + '__message',
                    this.props.componentCSSClassName + '__message--' + messageType
                ].join(' ');

                messageProps = {
                    className : messageClasses,
                    key       : 'validation-msg-' + messageType + '-' + index
                };

                renderedMessages.push(
                    React.createElement(
                        messageElement,
                        this.mergeAttributes(
                            messageProps,
                            this.props.messageContainerProps
                        ),
                        message
                    )
                );
            });
        }

        return renderedMessages;
    },

    renderMessages()
    {
        let messages     = [],
            component    = this,
            messageProps = {},
            messageElement,
            messageClasses;

            messages = messages.concat(
                this.renderMessage(this.props.errors, 'error'),
                this.renderMessage(this.props.successMessages, 'success'),
                this.renderMessage(this.props.warnings, 'warning')
            );

        return messages;
    },

    renderValidationContent()
    {
        let messages       = this.renderMessages(),
            orderedChildren = [];

        orderedChildren = [
            CreateFragment({'message-children' : this.props.children}),
            CreateFragment({'message'          : messages})
        ];

        if (this.props.renderMessages === 'before') {
            return orderedChildren.reverse();
        }

        return orderedChildren;
    },

    render()
    {
        let classes,
            showClass;

        showClass = this.props.errors ?
            this.props.componentCSSClassName + '--show' : null;

        classes = [
            this.props.componentCSSClassName,
            showClass,
            this.props.className
        ].join(' ').trim();

        return (
            <div {...this.props} className={classes}>
                {this.renderValidationContent()}
            </div>
        );
    }

});

export default Validation;
