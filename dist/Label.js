'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(props) {
  var newProps = _extends({}, props);

  _react2.default.Children.forEach(props.children, function (child) {
    if (child.type === _Radio2.default || child.type === _Checkbox2.default) {
      newProps.tabIndex = child.props.tabIndex || '0';
      newProps.onKeyDown = function (e) {
        if (e.keyCode === 32) {
          e.preventDefault();
          document.getElementById(child.props.id).click();
        }
      };
    }
  });

  return _react2.default.createElement(
    'label',
    newProps,
    props.children
  );
}

exports.default = Label;