'use strict';

var React      = require('react');
var Alert      = require('../dist/alert');
var Button     = require('../dist/button');
var Input      = require('../dist/input');
var Textarea   = require('../dist/textarea');
var Select     = require('../dist/select');
var Checkbox   = require('../dist/checkbox');
var Label      = require('../src/label');
var Validation = require('../src/validation');
var Modal      = require('../src/modal');
var Switch     = require('../src/switch');

require('./demo.scss');

module.exports = React.createClass({

    getInitialState()
    {
        return {
            modalView : false
        };
    },

    openModal()
    {
        this.setState({
            modalView : true
        });
    },

    closeModal()
    {
        this.setState({
            modalView : false
        });
    },

    renderModal()
    {
        return (
            <div className='section'>
                <h1 className='h1'>Modal Component</h1>
                <Button onClick={this.openModal}>Fire Modal</Button>
                <Modal
                    reveal     = {this.state.modalView !== false}
                    close      = {this.closeModal}
                    colorTheme = 'dark'
                >
                    <span>Working Modal</span>
                    <span onClick={this.closeModal}>Close This Modal</span>
                </Modal>
            </div>
        );
    },

    render()
    {
        return (
            <div className='demo__wrapper'>
                <div className='section'>
                    <h1 className='h1'>Alert Component</h1>
                    <Alert message='This Is An Alert'/>
                </div>
                <div className='section'>
                    <h1 className='h1'>Button Component</h1>
                    <Button>This is a Button</Button>
                </div>
                <div className='section'>
                    <h1 className='h1'>Input Component</h1>
                    <Input id='example1' />
                </div>
                <div className='section'>
                    <h1 className='h1'>Label Component</h1>
                    <Label htmlFor='example2' text='This Is a Label'>
                        <Input id='example2' placeholder='A label wraps around me' />
                    </Label>
                </div>
                <div className='section'>
                    <h1 className='h1'>Textarea Component</h1>
                    <Textarea id='example3' />
                </div>
                <div className='section'>
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
                <div className='section'>
                    <h1 className='h1'>Checkbox Inputs</h1>
                    <Checkbox
                        id      = 'example6'
                        name    = 'checkbox-example6'
                        checked = {true}
                    />
                </div>
                <div className='section'>
                    <Select
                        id                        = 'example5'
                        customIcon                = {String.fromCharCode(9660)}
                        componentWrapCSSClassName = 'super-custom__wrapper'
                        options                   = {[
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
                <div className='section'>
                    <h1 className='h1'>Input Component Validated</h1>
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
                {this.renderModal()}
                <div className='section'>
                    <h1 className='h1'>Grid System</h1>
                    <div className='row around-small'>
                        <div className='small-4'>
                            <div className='box blue'>small-4</div>
                        </div>
                        <div className='small-2'>
                            <div className='box red'>small-2</div>
                        </div>
                        <div className='small-2'>
                            <div className='box yellow'>small-2</div>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <h1 className='h1'>Switches</h1>
                    <Switch
                        id      = 'switch-input'
                        label   = 'Example Switch'
                        name    = 'single-switch'
                        value   = 'switch'
                        checked = {true}
                    />
                </div>
            </div>
        );
    }

});
