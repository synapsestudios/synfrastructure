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

var _lodashCloneDeep = require('lodash/cloneDeep');

var _lodashCloneDeep2 = _interopRequireDefault(_lodashCloneDeep);

var Validation = _react2['default'].createClass({

    displayName: 'Synfrastructure-Validation',

    mixins: [_mixinsSynfrastructureHelperMixin2['default']],

    propTypes: {
        componentCSSClassName: _react2['default'].PropTypes.string,
        renderMessages: _react2['default'].PropTypes.oneOf(['before', 'after']),
        messageContainer: _react2['default'].PropTypes.func,
        messageContainerProps: _react2['default'].PropTypes.object,
        validation: _react2['default'].PropTypes.shape({
            status: _react2['default'].PropTypes.string,
            messages: _react2['default'].PropTypes.array
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

            messages.push(_react2['default'].createElement(messageElement, component.mergeAttributes(messageProps, component.props.messageContainerProps), message));
        });

        return messages;
    },

    renderValidationContent: function renderValidationContent() {
        var messages = this.renderValidationMessages(),
            orderdChildren = [];

        orderdChildren = [_reactAddonsCreateFragment2['default']({ 'message-children': this.props.children }), _reactAddonsCreateFragment2['default']({ 'message': messages })];

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

        var validationProps = _lodashCloneDeep2['default'](this.props);
        delete validationProps.validation;
        delete validationProps.componentCSSClassName;
        delete validationProps.renderMessages;
        delete validationProps.messageContainer;
        delete validationProps.messageContainerProps;

        return _react2['default'].createElement(
            'div',
            _extends({}, validationProps, { className: classes }),
            this.renderValidationContent()
        );
    }

});

exports['default'] = Validation;
module.exports = exports['default'];