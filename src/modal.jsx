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
  children: PropTypes.any,
  className: PropTypes.string,
  close: PropTypes.func,
  colorTheme: PropTypes.oneOf([
    'dark',
    'light',
    'transparent',
  ]),
  reveal: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  close: null,
  colorTheme: 'dark',
};

export default Modal;
