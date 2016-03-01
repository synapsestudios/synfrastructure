'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = require('react-addons-create-fragment');

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _mixinsSynfrastructureHelperMixin = require('../mixins/synfrastructure-helper-mixin');

var _mixinsSynfrastructureHelperMixin2 = _interopRequireDefault(_mixinsSynfrastructureHelperMixin);

var Validation = _react2['default'].createClass({

    displayName: 'Synfrastructure-Validation',

    mixins: [_mixinsSynfrastructureHelperMixin2['default']],

    propTypes: {
        componentCSSClassName: _react2['default'].PropTypes.string,
        renderMessages: _react2['default'].PropTypes.oneOf(['before', 'after']),
        messageContainer: _react2['default'].PropTypes.func,
        messageContainerProps: _react2['default'].PropTypes.object,
        errors: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)]),
        successMessages: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)]),
        warnings: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)])
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

    renderMessage: function renderMessage(messages, messageType) {
        var _this = this;

        var messageProps = {},
            messageElement = undefined,
            messageClasses = undefined,
            renderedMessages = [];

        if (messages) {
            messages = Array.isArray(messages) ? messages : [messages];

            messageElement = this.props.messageContainer ? this.props.messageContainer : 'div';

            messages.map(function (message, index) {
                messageClasses = [_this.props.componentCSSClassName + '__message', _this.props.componentCSSClassName + '__message--' + messageType].join(' ');

                messageProps = {
                    className: messageClasses,
                    key: 'validation-msg-' + messageType + '-' + index
                };

                renderedMessages.push(_react2['default'].createElement(messageElement, _this.mergeAttributes(messageProps, _this.props.messageContainerProps), message));
            });
        }

        return renderedMessages;
    },

    renderMessages: function renderMessages() {
        var messages = [],
            component = this,
            messageProps = {},
            messageElement = undefined,
            messageClasses = undefined;

        messages = messages.concat(this.renderMessage(this.props.errors, 'error'), this.renderMessage(this.props.successMessages, 'success'), this.renderMessage(this.props.warnings, 'warning'));

        return messages;
    },

    renderValidationContent: function renderValidationContent() {
        var messages = this.renderMessages(),
            orderedChildren = [];

        orderedChildren = [_reactAddonsCreateFragment2['default']({ 'message-children': this.props.children }), _reactAddonsCreateFragment2['default']({ 'message': messages })];

        if (this.props.renderMessages === 'before') {
            return orderedChildren.reverse();
        }

        return orderedChildren;
    },

    render: function render() {
        var classes = undefined,
            showClass = undefined;

        showClass = this.props.errors ? this.props.componentCSSClassName + '--show' : null;

        classes = [this.props.componentCSSClassName, showClass, this.props.className].join(' ').trim();

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: classes }),
            this.renderValidationContent()
        );
    }

});

exports['default'] = Validation;
module.exports = exports['default'];