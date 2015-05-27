'use strict';

var React  = require('react');
var Alert  = require('../src/alert');
var Button = require('../src/button');

module.exports = React.createClass({

    render : function()
    {
        return (
            <div>
                <h1>Alert</h1>
                <Alert message='Alert'/>
                <h1>Button</h1>
                <Button>Button</Button>
                <h1>...and so on</h1>
            </div>
        );
    }

});
