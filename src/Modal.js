import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeButton: PropTypes.node,
    isVisible: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    closeButton: <button type="button">Close</button>,
    isVisible: false,
    onClose: null,
  };

  componentDidMount() {
    if (this.props.isVisible) {
      this.setBodyOverflow(true);
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      this.setBodyOverflow(true);
    } else if (this.props.isVisible && !nextProps.isVisible) {
      this.setBodyOverflow(false);
    }
  }

  componentWillUnmount() {
    this.setBodyOverflow(false);
  }

  setBodyOverflow(isVisible) {
    if (isVisible) {
      document.body.classList.add('body-lock');
    } else {
      document.body.classList.remove('body-lock');
    }
  }

  render() {
    const modalClasses = {
      modal: true,
      'modal--visible': this.props.isVisible,
      [`${this.props.className}`]: this.props.className,
    };

    return (
      <div className={classNames(modalClasses)}>
        <div className="modal__children">
          {React.cloneElement(this.props.closeButton, {
            className: 'modal__close',
            onClick: this.props.onClose,
          })}
          {this.props.children}
        </div>
        <button className="modal__overlay" onClick={this.props.onClose} />
      </div>
    );
  }
}

export default Modal;
