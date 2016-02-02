'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _mixinsFormInputMixin = require('../mixins/form-input-mixin');

var _mixinsFormInputMixin2 = _interopRequireDefault(_mixinsFormInputMixin);

var Select = _react2['default'].createClass({

    displayName: 'SynfrastructureSelect',

    mixins: [_mixinsFormInputMixin2['default']],

    propTypes: {
        id: _react2['default'].PropTypes.string.isRequired,
        disabled: _react2['default'].PropTypes.bool,
        options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
            text: _react2['default'].PropTypes.string,
            value: _react2['default'].PropTypes.any,
            selected: _react2['default'].PropTypes.bool
        })).isRequired,
        componentCSSClassName: _react2['default'].PropTypes.string,
        componentWrapCSSClassName: _react2['default'].PropTypes.string,
        customIcon: _react2['default'].PropTypes.any,
        value: _react2['default'].PropTypes.any,
        onFocus: _react2['default'].PropTypes.func,
        onBlur: _react2['default'].PropTypes.func,
        onChange: _react2['default'].PropTypes.func,
        onKeyDown: _react2['default'].PropTypes.func,
        onKeyUp: _react2['default'].PropTypes.func,
        onKeyPress: _react2['default'].PropTypes.func,
        className: _react2['default'].PropTypes.string,
        tabIndex: _react2['default'].PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            componentCSSClassName: 'select',
            customIcon: null,
            value: null,
            onFocus: null,
            onBlur: null,
            onChange: null,
            onKeyUp: null,
            onKeyDown: null,
            onKeyPress: null,
            disabled: false,
            className: null
        };
    },

    getSelectedValue: function getSelectedValue() {
        var selectedOption = undefined;

        if (this.props.value) {
            return this.props.value;
        }

        selectedOption = _lodash.Collection.findWhere(this.props.options, { selected: true });

        if (!selectedOption) {
            return null;
        }

        return selectedOption.value;
    },

    renderSelectOptions: function renderSelectOptions() {
        if (!this.props.options) {
            return null;
        }

        return _lodash.Collection.map(this.props.options, function (option, index) {
            return _react2['default'].createElement(
                'option',
                {
                    value: option.value,
                    key: option.text
                },
                option.text
            );
        });
    },

    renderCustomSelect: function renderCustomSelect() {
        var classes = undefined;

        if (!this.props.customIcon) {
            return this.renderDefaultSelect();
        }

        classes = ['select--custom--wrap', this.props.componentWrapCSSClassName].join(' ');

        return _react2['default'].createElement(
            'div',
            { className: classes },
            this.renderDefaultSelect(),
            _react2['default'].createElement(
                'span',
                { className: 'select--custom--icon' },
                this.props.customIcon
            )
        );
    },

    renderDefaultSelect: function renderDefaultSelect() {
        var classes = undefined,
            customSelect = undefined;

        customSelect = this.props.customIcon ? this.props.componentCSSClassName + '--custom' : null;

        classes = [this.props.componentCSSClassName, this.props.className, customSelect].join(' ');

        return _react2['default'].createElement(
            'select',
            _extends({}, this.props, {
                disabled: this.props.disabled,
                className: classes,
                id: this.props.id,
                name: this.props.id,
                value: this.getSelectedValue(),
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                onChange: this.onChange,
                onKeyUp: this.onKeyUp,
                onKeyDown: this.onKeyDown,
                onKeyPress: this.onKeyPress,
                tabIndex: this.props.tabIndex
            }),
            this.renderSelectOptions()
        );
    },

    render: function render() {
        return this.renderCustomSelect();
    }

});

exports['default'] = Select;
module.exports = exports['default'];