/* global document */
'use strict';

var classNames = require('react/lib/cx');
var className = require('../../../util/className');
var React = require('react');

module.exports = React.createClass({

    displayName: 'Modal',

    propTypes: {
        reveal: React.PropTypes.bool.isRequired,
        close: React.PropTypes.func,
        colorTheme: React.PropTypes.oneOf(['dark', 'light', 'transparent'])
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

        if (visible) {
            className.addClass(document.body, 'l--modal-revealed');
        } else {
            className.removeClass(document.body, 'l--modal-revealed');
        }
    },

    renderModalMask: function renderModalMask() {
        if (!this.props.close) {
            return null;
        }

        return React.createElement('div', {
            className: 'modal__mask',
            onClick: this.props.close
        });
    },

    render: function render() {
        var componentClasses, colorThemeClasses, contentClasses;

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

        return React.createElement(
            'div',
            { className: classNames(componentClasses) },
            React.createElement(
                'div',
                { className: classNames(contentClasses) },
                this.props.children
            ),
            this.renderModalMask()
        );
    }

});