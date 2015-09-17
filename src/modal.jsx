/* jshint globalstrict: true */
/* global document */
'use strict';

let classNames = require('classnames');
let className  = require('../util/className');
let React      = require('react');

module.exports = React.createClass({

    displayName : 'Modal',

    propTypes : {
        reveal     : React.PropTypes.bool.isRequired,
        close      : React.PropTypes.func,
        colorTheme : React.PropTypes.oneOf([
            'dark',
            'light',
            'transparent'
        ])
    },

    getDefaultProps()
    {
        return {
            colorTheme   : 'dark',
            close        : null
        };
    },

    componentWillUpdate(nextProps, nextState)
    {
        if (! this.props.reveal && nextProps.reveal) {
            this.__setBodyOverflow(true);
        } else if (this.props.reveal && ! nextProps.reveal) {
            this.__setBodyOverflow(false);
        }
    },

    __setBodyOverflow(visible)
    {
        if (typeof document === 'undefined') {
            return null;
        }

        visible ? className.addClass(document.body, 'l--modal-revealed') : className.removeClass(document.body, 'l--modal-revealed');
    },

    renderModalMask()
    {
        if (! this.props.close) {
            return null;
        }

        return (
            <div
                className = 'modal__mask'
                onClick   = {this.props.close}
                >
            </div>
        );
    },

    render()
    {
        let componentClasses,
            colorThemeClasses,
            contentClasses;

        colorThemeClasses = this.props.colorTheme ?
        'modal--' + this.props.colorTheme : null;

        componentClasses = {
            'modal'         : true,
            'modal--reveal' : this.props.reveal
        };

        componentClasses[colorThemeClasses]    = colorThemeClasses;
        componentClasses[this.props.className] = this.props.className;

        contentClasses = {
            'modal__content' : true
        };

        return (
            <div className={classNames(componentClasses)}>
                <div className={classNames(contentClasses)}>
                    {this.props.children}
                </div>
                {this.renderModalMask()}
            </div>
        );

    }

});
