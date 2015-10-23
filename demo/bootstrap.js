require('../scss/app');

import React    from 'react';
import ReactDOM from 'react-dom';
import Demo     from './demo';

window.onload = function() {
    ReactDOM.render(
        React.createElement(Demo),
        window.document.getElementById('content')
    );
};
