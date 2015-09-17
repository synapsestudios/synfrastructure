'use strict';

let React                      = require('react/addons');
let SynfrastructureHelperMixin = require('../mixins/synfrastructure-helper-mixin');

let Validation = React.createClass({

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

    renderValidationMessages()
    {
        let messages     = [],
            component    = this,
            messageProps = {},
            messageElement,
            messageClasses;

        if (! this.props.validation || ! this.props.validation.messages) {
            return null;
        }

        messageElement = this.props.messageContainer ?
            this.props.messageContainer : 'div';

        this.props.validation.messages.map((message, index) => {
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

    renderValidationContent()
    {
        let messages       = this.renderValidationMessages(),
            orderdChildren = [];

        orderdChildren = [
            React.addons.createFragment({'message-children' : this.props.children}),
            React.addons.createFragment({'message'          : messages})
        ];

        if (this.props.renderMessages === 'before') {
            return orderdChildren.reverse();
        }

        return orderdChildren;
    },

    render()
    {
        let classes,
            showClass,
            statusClass;

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

        return (
            <div className={classes}>
                {this.renderValidationContent()}
            </div>
        );
    }

});

module.exports = Validation;
