import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Modal extends Component {

  componentWillUpdate(nextProps) {
    if (!this.props.reveal && nextProps.reveal) {
      this.setBodyOverflow(true);
    } else if (this.props.reveal && !nextProps.reveal) {
      this.setBodyOverflow(false);
    }
  }

  setBodyOverflow(visible) {
    if (typeof document === 'undefined') {
      return null;
    }

    return visible ?
      document.body.classList.add('l--modal-revealed') :
      document.body.classList.remove('l--modal-revealed');
  }

  renderModalMask() {
    if (!this.props.close) {
      return null;
    }

    return (
      <div
        className="modal__mask"
        onClick={this.props.close}
      >
      </div>
    );
  }

  render() {
    const colorThemeClasses = this.props.colorTheme ? `modal--${this.props.colorTheme}` : null;

    const componentClasses = {
      modal: true,
      'modal--reveal': this.props.reveal,
    };

    componentClasses[colorThemeClasses] = colorThemeClasses;
    componentClasses[this.props.className] = this.props.className;

    const contentClasses = {
      modal__content: true,
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

}

Modal.propTypes = {
  reveal: PropTypes.bool.isRequired,
  close: PropTypes.func,
  colorTheme: PropTypes.oneOf([
    'dark',
    'light',
    'transparent',
  ]),
  className: PropTypes.string,
  children: PropTypes.any,
};

Modal.defaultProps = {
  colorTheme: 'dark',
  close: null,
};

export default Modal;
