'use strict';

var React  = require('react');
var Alert  = require('../dist/alert');
var Button = require('../dist/button');
var Input  = require('../dist/input');
var Label  = require('../dist/label');

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
                <div>
                    <h1>Alert Component</h1>
                    <Alert message='This Is An Alert'/>
                </div>
                <div>
                    <h1>Button Component</h1>
                    <Button>This is a Button</Button>
                </div>
                <div>
                    <h1>Input Component</h1>
                    <Input id='example1' />
                </div>
                <div>
                    <h1>Label Component</h1>
                    <Label htmlFor='example2' text='This Is a Label'>
                        <Input id='example2' placeholder='A label wraps around me' />
                    </Label>
                </div>
            </div>
        );
    }

});
