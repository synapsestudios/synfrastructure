'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var SynfrastructureHelperMixin = require('../mixins/synfrastructure-helper-mixin');

var Validation = React.createClass({

    displayName: 'Synfrastructure-Validation',

    mixins: [SynfrastructureHelperMixin],

    propTypes: {
        componentCSSClassName: React.PropTypes.string,
        renderMessages: React.PropTypes.oneOf(['before', 'after']),
        messageContainer: React.PropTypes.func,
        messageContainerProps: React.PropTypes.object,
        validation: React.PropTypes.shape({
            status: React.PropTypes.string,
            messages: React.PropTypes.array
        })
    },

    getDefaultProps: function getDefaultProps() {
        return {
            componentCSSClassName: 'validation',
            renderMessages: 'after',
            messageContainer: null,
            messageContainerProps: null,
            validation: null
        };
    },

    renderValidationMessages: function renderValidationMessages() {
        var messages = [],
            component = this,
            messageProps = {},
            messageElement = undefined,
            messageClasses = undefined;

        if (!this.props.validation || !this.props.validation.messages) {
            return null;
        }

        messageElement = this.props.messageContainer ? this.props.messageContainer : 'div';

        this.props.validation.messages.map(function (message, index) {
            messageClasses = [component.props.componentCSSClassName + '__message', component.props.componentCSSClassName + '__message--' + component.props.validation.status].join(' ');

            messageProps = {
                className: messageClasses,
                key: 'validation-msg-' + index
            };

            messages.push(React.createElement(messageElement, component.mergeAttributes(messageProps, component.props.messageContainerProps), message));
        });

        return messages;
    },

    renderValidationContent: function renderValidationContent() {
        var messages = this.renderValidationMessages(),
            orderdChildren = [];

        orderdChildren = [React.addons.createFragment({ 'message-children': this.props.children }), React.addons.createFragment({ 'message': messages })];

        if (this.props.renderMessages === 'before') {
            return orderdChildren.reverse();
        }

        return orderdChildren;
    },

    render: function render() {
        var classes = undefined,
            showClass = undefined,
            statusClass = undefined;

        showClass = this.props.validation ? this.props.componentCSSClassName + '--show' : null;

        statusClass = this.props.validation ? this.props.componentCSSClassName + '--' + this.props.validation.status : null;

        classes = [this.props.componentCSSClassName, showClass, statusClass, this.props.className].join(' ').trim();

        return React.createElement(
            'div',
            _extends({}, this.props, { className: classes }),
            this.renderValidationContent()
        );
    }

});

module.exports = Validation;