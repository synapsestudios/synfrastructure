import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

class Tooltip extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      placeholder: '',
      x: 'NONE',
      y: 'NONE',
      place: '',
      type: '',
      effect: '',
      position: {},
    };

    this._updatePosition = this._updatePosition.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.updateTooltip = this.updateTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  componentDidMount() {
    this._updatePosition();
    this.bindListener();
  }

  componentWillUpdate() {
    this.unbindListener();
  }

  componentDidUpdate() {
    this._updatePosition();
    this.bindListener();
  }

  componentWillUnmount() {
    this.unbindListener();
  }

  bindListener() {
    const targetArray = document.querySelectorAll('[data-tip]');

    for (let i = 0; i < targetArray.length; i++) {
      targetArray[i].addEventListener('mouseenter', this.showTooltip, false);
      targetArray[i].addEventListener('mousemove', this.updateTooltip, false);
      targetArray[i].addEventListener('mouseleave', this.hideTooltip, false);
    }
  }

  unbindListener() {
    const targetArray = document.querySelectorAll('[data-tip]');

    for (let i = 0; i < targetArray.length; i++) {
      targetArray[i].removeEventListener('mouseenter', this.showTooltip);
      targetArray[i].removeEventListener('mousemove', this.updateTooltip);
      targetArray[i].removeEventListener('mouseleave', this.hideTooltip);
    }
  }

  _updatePosition() {
    const node = ReactDOM.findDOMNode(this);
    const tipWidth = node.clientWidth;
    const tipHeight = node.clientHeight;
    const offset = { x: 0, y: 0 };

    const { effect } = this.state;

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

    let xPosition = 0;
    let yPosition = 0;
    let { position } = this.state;

    if (Object.prototype.toString.apply(position) === '[object String]') {
      position = JSON.parse(position.toString().replace(/\'/g,"\""));
    }

    for (let key in position) {
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
  }

  showTooltip(error) {
    this.setState({
      placeholder: error.target.getAttribute('data-tip'),
      place: error.target.getAttribute('data-place') ?
        error.target.getAttribute('data-place') : (this.props.place ? this.props.place : 'top'),
      effect: error.target.getAttribute('data-effect') ?
        error.target.getAttribute('data-effect') : (this.props.effect ? this.props.effect : 'float'),
      position: error.target.getAttribute('data-position') ?
        error.target.getAttribute('data-position') : (this.props.position ? this.props.position : {}),
    });
    this.updateTooltip(error);
  }

  updateTooltip(error) {
    if (this.trim(this.state.placeholder).length > 0) {
      if (this.state.effect === 'float') {
        this.setState({
          show: true,
          x: error.clientX,
          y: error.clientY,
        });
      } else if (this.state.effect === 'fixed') {
        const targetTop = error.target.getBoundingClientRect().top;
        const targetLeft = error.target.getBoundingClientRect().left;
        const node = ReactDOM.findDOMNode(this);
        const tipWidth = node.clientWidth;
        const tipHeight = node.clientHeight;
        const targetWidth = error.target.clientWidth;
        const targetHeight = error.target.clientHeight;
        const { place } = this.state;
        let x;
        let y;
        if (place === 'top') {
          x = targetLeft - (tipWidth / 2) + (targetWidth / 2);
          y = targetTop - tipHeight - 8;
        } else if (place === 'bottom') {
          x = targetLeft - (tipWidth / 2) + (targetWidth / 2);
          y = targetTop + targetHeight + 8;
        } else if (place === 'left') {
          x = targetLeft - tipWidth - 6;
          y = targetTop + (targetHeight / 2) - (tipHeight / 2);
        } else if (place === 'right') {
          x = targetLeft + targetWidth + 6;
          y = targetTop + (targetHeight / 2) - (tipHeight / 2);
        }
        this.setState({
          show: true,
          x: this.state.x === 'NONE' ? x : this.state.x,
          y: this.state.y === 'NONE' ? y : this.state.y,
        });
      }
    }
  }

  hideTooltip() {
    this.setState({
      show: false,
      x: 'NONE',
      y: 'NONE',
    });
  }

  trim(string) {
    const newString = string.split('');
    let firstCount = 0;
    let lastCount = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        break;
      }
      firstCount++;
    }

    for (let i = string.length - 1; i >= 0; i--) {
      if (string[i] !== ' ') {
        break;
      }
      lastCount++;
    }

    newString.splice(0, firstCount);
    newString.splice(-lastCount, lastCount);
    return newString.join('');
  }

  render() {
    let tooltipClass = classNames(
      'tooltip',
      { 'tooltip--show': this.state.show },
      { tooltip__top: this.state.place === 'top' },
      { tooltip__bottom: this.state.place === 'bottom' },
      { tooltip__left: this.state.place === 'left' },
      { tooltip__right: this.state.place === 'right' }
    );

    return (
      <span className={tooltipClass} data-id="tooltip">{this.state.placeholder}</span>
    );
  }

}

Tooltip.propTypes = {
  place: PropTypes.string,
  effect: PropTypes.string,
  position: PropTypes.object,
};

export default Tooltip;
