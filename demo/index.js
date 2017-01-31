/* globals document, window */
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';

window.onload = function bootstrap() {
  ReactDOM.render(
    React.createElement(Demo),
    window.document.getElementById('root'),
  );
};
