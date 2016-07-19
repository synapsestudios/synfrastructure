'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashCloneDeep = require('lodash/cloneDeep');

var _lodashCloneDeep2 = _interopRequireDefault(_lodashCloneDeep);

var Label = _react2['default'].createClass({

    displayName: 'SynfrastructureFormLabel',

    propTypes: {
        htmlFor: _react2['default'].PropTypes.string.isRequired,
        componentCSSClassName: _react2['default'].PropTypes.string,
        text: _react2['default'].PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            componentCSSClassName: 'label',
            text: null
        };
    },

    render: function render() {
        var Component = undefined,
            classes = undefined;

        classes = [this.props.componentCSSClassName, this.props.className].join(' ');

        var labelProps = _lodashCloneDeep2['default'](this.props);
        delete labelProps.text;
        delete labelProps.componentCSSClassName;

        Component = _react2['default'].createElement('label', _extends({}, labelProps, {
            htmlFor: this.props.htmlFor,
            className: classes
        }), [this.props.text, this.props.children]);

        return Component;
    }

});

exports['default'] = Label;
module.exports = exports['default'];