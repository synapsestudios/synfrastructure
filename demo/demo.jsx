'use strict';

var React  = require('react');
var Alert  = require('../dist/alert');
var Button = require('../dist/button');

module.exports = React.createClass({

    render : function()
    {
        var styles = {
            maxWidth : '720px',
            margin   : '0 auto',
            padding  : '20px'
        }

        return (
            <div style={styles}>
                <h1>Alert</h1>
                <Alert message='Alert'/>
                <h1>Button</h1>
                <Button>Button</Button>
                <h1>...and so on</h1>
            </div>
        );
    }

});
