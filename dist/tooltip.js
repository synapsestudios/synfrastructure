'use strict';

var React = require('react');
var classname = require('classnames');

var Tooltip = React.createClass({

    displayName: 'ReactTooltip',

    propTypes: {
        place: React.PropTypes.string,
        effect: React.PropTypes.string,
        positon: React.PropTypes.object
    },

    getInitialState: function getInitialState() {
        return {
            show: false,
            placeholder: '',
            x: 'NONE',
            y: 'NONE',
            place: '',
            type: '',
            effect: '',
            position: {}
        };
    },

    componentDidMount: function componentDidMount() {
        this._updatePosition();
        this.bindListener();
    },

    componentWillUnmount: function componentWillUnmount() {
        this.unbindListener();
    },

    componentWillUpdate: function componentWillUpdate() {
        this.unbindListener();
    },

    componentDidUpdate: function componentDidUpdate() {
        this._updatePosition();
        this.bindListener();
    },

    bindListener: function bindListener() {
        var targetArray = document.querySelectorAll('[data-tip]');

        for (var i = 0; i < targetArray.length; i++) {
            targetArray[i].addEventListener('mouseenter', this.showTooltip, false);
            targetArray[i].addEventListener('mousemove', this.updateTooltip, false);
            targetArray[i].addEventListener('mouseleave', this.hideTooltip, false);
        }
    },

    unbindListener: function unbindListener() {
        var targetArray = document.querySelectorAll('[data-tip]');

        for (var i = 0; i < targetArray.length; i++) {
            targetArray[i].removeEventListener('mouseenter', this.showTooltip);
            targetArray[i].removeEventListener('mousemove', this.updateTooltip);
            targetArray[i].removeEventListener('mouseleave', this.hideTooltip);
        }
    },

    _updatePosition: function _updatePosition() {
        var node = undefined,
            tipWidth = undefined,
            tipHeight = undefined,
            offset = undefined;

        node = React.findDOMNode(this);
        tipWidth = node.clientWidth;
        tipHeight = node.clientHeight;
        offset = { x: 0, y: 0 };

        var effect = this.state.effect;

        if (effect === 'float') {
            if (this.state.place === 'top') {
                offset.x = -(tipWidth / 2);
                offset.y = -50;
            } else if (this.state.place === 'bottom') {
                offset.x = -(tipWidth / 2);
                offset.y = 30;
            } else if (this.state.place === 'left') {
                offset.x = -(tipWidth + 15);
                offset.y = -(tipHeight / 2);
            } else if (this.state.place === 'right') {
                offset.x = 10;
                offset.y = -(tipHeight / 2);
            }
        }

        var xPosition = 0;var yPosition = 0;var position = this.state.position;

        if (Object.prototype.toString.apply(position) === '[object String]') {
            position = JSON.parse(position.toString().replace(/\'/g, '"'));
        }

        for (var key in position) {
            if (key === 'top') {
                yPosition -= parseInt(position[key]);
            } else if (key === 'bottom') {
                yPosition += parseInt(position[key]);
            } else if (key === 'left') {
                xPosition -= parseInt(position[key]);
            } else if (key === 'right') {
                xPosition += parseInt(position[key]);
            }
        }

        node.style.left = this.state.x + offset.x + xPosition + 'px';
        node.style.top = this.state.y + offset.y + yPosition + 'px';
    },

    showTooltip: function showTooltip(error) {
        this.setState({
            placeholder: error.target.getAttribute('data-tip'),
            place: error.target.getAttribute('data-place') ? error.target.getAttribute('data-place') : this.props.place ? this.props.place : 'top',
            effect: error.target.getAttribute('data-effect') ? error.target.getAttribute('data-effect') : this.props.effect ? this.props.effect : 'float',
            position: error.target.getAttribute('data-position') ? error.target.getAttribute('data-position') : this.props.position ? this.props.position : {}
        });
        this.updateTooltip(error);
    },

    updateTooltip: function updateTooltip(error) {
        if (this.trim(this.state.placeholder).length > 0) {
            if (this.state.effect === 'float') {
                this.setState({
                    show: true,
                    x: error.clientX,
                    y: error.clientY
                });
            } else if (this.state.effect === 'fixed') {
                var targetTop = error.target.getBoundingClientRect().top;
                var targetLeft = error.target.getBoundingClientRect().left;
                var node = React.findDOMNode(this);
                var tipWidth = node.clientWidth;
                var tipHeight = node.clientHeight;
                var targetWidth = error.target.clientWidth;
                var targetHeight = error.target.clientHeight;
                var place = this.state.place;

                var x = undefined,
                    y = undefined;
                if (place === 'top') {
                    x = targetLeft - tipWidth / 2 + targetWidth / 2;
                    y = targetTop - tipHeight - 8;
                } else if (place === 'bottom') {
                    x = targetLeft - tipWidth / 2 + targetWidth / 2;
                    y = targetTop + targetHeight + 8;
                } else if (place === 'left') {
                    x = targetLeft - tipWidth - 6;
                    y = targetTop + targetHeight / 2 - tipHeight / 2;
                } else if (place === 'right') {
                    x = targetLeft + targetWidth + 6;
                    y = targetTop + targetHeight / 2 - tipHeight / 2;
                }
                this.setState({
                    show: true,
                    x: this.state.x === 'NONE' ? x : this.state.x,
                    y: this.state.y === 'NONE' ? y : this.state.y
                });
            }
        }
    },

    hideTooltip: function hideTooltip(error) {
        this.setState({
            show: false,
            x: 'NONE',
            y: 'NONE'
        });
    },

    render: function render() {
        var tooltipClass = classname('tooltip', { 'tooltip--show': this.state.show }, { 'tooltip__top': this.state.place === 'top' }, { 'tooltip__bottom': this.state.place === 'bottom' }, { 'tooltip__left': this.state.place === 'left' }, { 'tooltip__right': this.state.place === 'right' });

        return React.createElement(
            'span',
            { className: tooltipClass, 'data-id': 'tooltip' },
            this.state.placeholder
        );
    },

    trim: function trim(string) {
        var newString = string.split('');
        var firstCount = 0,
            lastCount = 0;

        for (var i = 0; i < string.length; i++) {
            if (string[i] !== ' ') {
                break;
            }
            firstCount++;
        }

        for (var i = string.length - 1; i >= 0; i--) {
            if (string[i] !== ' ') {
                break;
            }
            lastCount++;
        }

        newString.splice(0, firstCount);
        newString.splice(-lastCount, lastCount);
        return newString.join('');
    }

});

module.exports = Tooltip;