'use strict';

var React      = require('react');
var Alert      = require('../dist/alert');
var Button     = require('../dist/button');
var Input      = require('../dist/input');
var Textarea   = require('../dist/textarea');
var Select     = require('../dist/select');
var Checkbox   = require('../dist/checkbox');
var Label      = require('../dist/label');
var Validation = require('../dist/validation');

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
                <div>
                    <h1>Textarea Component</h1>
                    <Textarea id='example3' />
                </div>
                <div>
                    <Select
                        id      = 'example4'
                        options = {[
                            {
                                text     : 'Option 1',
                                value    : 'option-1',
                                selected : true
                            },
                            {
                                text     : 'Option 2',
                                value    : 'option-2',
                                selected : false
                            },
                            {
                                text     : 'Option 3',
                                value    : 'option-3',
                                selected : false
                            }
                        ]}
                    />
                </div>
                <div>
                    <h1>Checkbox Inputs</h1>
                    <Checkbox
                        id      = 'example6'
                        name    = 'checkbox-example6'
                        checked = {true}
                    />
                </div>
                <div>
                    <Select
                        id         = 'example5'
                        customIcon = {String.fromCharCode(9660)}
                        options    = {[
                            {
                                text     : 'Option 1',
                                value    : 'option-1',
                                selected : false
                            },
                            {
                                text     : 'Option 2',
                                value    : 'option-2',
                                selected : true
                            },
                            {
                                text     : 'Option 3',
                                value    : 'option-3',
                                selected : false
                            }
                        ]}
                    />
                </div>
                <div>
                    <h1>Input Component Validated</h1>
                    <Validation
                        validation = {{
                            status   : 'error',
                            messages : [
                                'This field is required',
                                'This field is empty'
                            ]
                        }}
                    >
                        <Input id='example5' />
                    </Validation>
                </div>
            </div>
        );
    }

});
