import React, { Component, PropTypes } from 'react';
import CreateFragment from 'react-addons-create-fragment';

class Validation extends Component {

  mergeAttributes(attr1, attr2) {
    const newAttributes = {};
    let attrname;

    for (attrname in attr1) {
      newAttributes[attrname] = attr1[attrname];
    }
    for (attrname in attr2) {
      newAttributes[attrname] = attr2[attrname];
    }

    return newAttributes;
  }

  renderMessage(messages, messageType) {
    let messageProps = {};
    let messageElement;
    let messageClasses;
    const renderedMessages = [];

    if (messages) {
      const messagesArray = Array.isArray(messages) ? messages : [messages];

      messageElement = this.props.messageContainer ?
      this.props.messageContainer : 'div';

      messagesArray.map((message, index) => {
        messageClasses = [
          `${this.props.componentCSSClassName}__message`,
          `${this.props.componentCSSClassName}__message--${messageType}`,
        ].join(' ').trim();

        messageProps = {
          className: messageClasses,
          key: `validation-msg-${messageType}-${index}`,
        };

        return renderedMessages.push(
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
  }

  renderMessages() {
    let messages = [];

    messages = messages.concat(
      this.renderMessage(this.props.errors, 'error'),
      this.renderMessage(this.props.successMessages, 'success'),
      this.renderMessage(this.props.warnings, 'warning')
    );

    return messages;
  }

  renderValidationContent() {
    const messages = this.renderMessages();
    const orderedChildren = [
      CreateFragment({ 'message-children': this.props.children }),
      CreateFragment({ 'message': messages }),
    ];

    if (this.props.renderMessages === 'before') {
      return orderedChildren.reverse();
    }

    return orderedChildren;
  }

  render() {
    const showClass = this.props.errors ?
    `${this.props.componentCSSClassName}--show` : null;

    const classes = [
      this.props.componentCSSClassName,
      showClass,
      this.props.className,
    ].join(' ').trim();

    return (
      <div {...this.props} className={classes}>
        {this.renderValidationContent()}
      </div>
    );
  }

}

Validation.propTypes = {
  componentCSSClassName: PropTypes.string,
  renderMessages: PropTypes.oneOf(['before', 'after']),
  messageContainer: PropTypes.func,
  messageContainerProps: PropTypes.object,
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.oneOf([false]),
  ]),
  successMessages: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.oneOf([false]),
  ]),
  warnings: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.oneOf([false]),
  ]),
  className: PropTypes.string,
};

Validation.defaultProps = {
  componentCSSClassName: 'validation',
  renderMessages: 'after',
  messageContainer: null,
  messageContainerProps: null,
  validation: null,
};

export default Validation;
