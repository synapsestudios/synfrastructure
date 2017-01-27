'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkedIcon = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  _react2.default.createElement('path', { d: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
);

var uncheckedIcon = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
);

function Checkbox(props) {
  return _react2.default.createElement(_Toggle2.default, _extends({ type: 'checkbox', checkedIcon: checkedIcon, uncheckedIcon: uncheckedIcon }, props));
}

exports.default = Checkbox;