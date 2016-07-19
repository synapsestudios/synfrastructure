'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilClassName = require('../util/className');

var _utilClassName2 = _interopRequireDefault(_utilClassName);

var Modal = _react2['default'].createClass({

    displayName: 'SynfrastructureModal',

    propTypes: {
        reveal: _react2['default'].PropTypes.bool.isRequired,
        close: _react2['default'].PropTypes.func,
        colorTheme: _react2['default'].PropTypes.oneOf(['dark', 'light', 'transparent'])
    },

    getDefaultProps: function getDefaultProps() {
        return {
            colorTheme: 'dark',
            close: null
        };
    },

    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
        if (!this.props.reveal && nextProps.reveal) {
            this.__setBodyOverflow(true);
        } else if (this.props.reveal && !nextProps.reveal) {
            this.__setBodyOverflow(false);
        }
    },

    __setBodyOverflow: function __setBodyOverflow(visible) {
        if (typeof document === 'undefined') {
            return null;
        }

        visible ? _utilClassName2['default'].addClass(document.body, 'l--modal-revealed') : _utilClassName2['default'].removeClass(document.body, 'l--modal-revealed');
    },

    renderModalMask: function renderModalMask() {
        if (!this.props.close) {
            return null;
        }

        return _react2['default'].createElement('div', {
            className: 'modal__mask',
            onClick: this.props.close
        });
    },

    render: function render() {
        var componentClasses = undefined,
            colorThemeClasses = undefined,
            contentClasses = undefined;

        colorThemeClasses = this.props.colorTheme ? 'modal--' + this.props.colorTheme : null;

        componentClasses = {
            'modal': true,
            'modal--reveal': this.props.reveal
        };

        componentClasses[colorThemeClasses] = colorThemeClasses;
        componentClasses[this.props.className] = this.props.className;

        contentClasses = {
            'modal__content': true
        };

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](componentClasses) },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](contentClasses) },
                this.props.children
            ),
            this.renderModalMask()
        );
    }

});

exports['default'] = Modal;
module.exports = exports['default'];