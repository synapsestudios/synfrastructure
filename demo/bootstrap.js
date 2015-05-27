'use strict';

var React = require('react');
var Demo  = require('./demo.jsx');

window.onload = function() {
    React.render(
        React.createElement(Demo),
        window.document.getElementById('content')
    );
};
