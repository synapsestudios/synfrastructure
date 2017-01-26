'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isVisible) {
        this.setBodyOverflow(true);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (!this.props.isVisible && nextProps.isVisible) {
        this.setBodyOverflow(true);
      } else if (this.props.isVisible && !nextProps.isVisible) {
        this.setBodyOverflow(false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setBodyOverflow(false);
    }
  }, {
    key: 'setBodyOverflow',
    value: function setBodyOverflow(isVisible) {
      if (isVisible) {
        document.body.classList.add('body-lock');
      } else {
        document.body.classList.remove('body-lock');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var modalClasses = _defineProperty({
        modal: true,
        'modal--visible': this.props.isVisible
      }, '' + this.props.className, this.props.className);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(modalClasses) },
        _react2.default.createElement(
          'div',
          { className: 'modal__children' },
          _react2.default.cloneElement(this.props.closeButton, {
            className: 'modal__close',
            onClick: this.props.onClose
          }),
          this.props.children
        ),
        _react2.default.createElement('button', { className: 'modal__overlay', onClick: this.props.onClose })
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  closeButton: _react.PropTypes.node,
  isVisible: _react.PropTypes.bool,
  onClose: _react.PropTypes.func.isRequired
};
Modal.defaultProps = {
  className: null,
  closeButton: _react2.default.createElement(
    'button',
    { type: 'button' },
    'Close'
  ),
  isVisible: false,
  onClose: null
};
exports.default = Modal;