import React      from 'react';
import Alert      from '../src/alert';
import Button     from '../src/button';
import Input      from '../src/input';
import Textarea   from '../src/textarea';
import Select     from '../src/select';
import Checkbox   from '../src/checkbox';
import Label      from '../src/label';
import Validation from '../src/validation';
import Modal      from '../src/modal';
import Tooltip    from '../src/tooltip';
import Switch     from '../src/switch';

require('./demo.scss');

let Demo = React.createClass({

    getInitialState()
    {
        return {
            modalView : false,
            switch1   : true,
            switch2   : false
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

    toggleSwitch1()
    {
        this.setState({switch1 : ! this.state.switch1});
    },

    toggleSwitch2()
    {
        this.setState({switch2 : ! this.state.switch2});
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
            <div className='demo__wrapper a--appear'>
                <div className='section'>
                    <h1 className='h1'>Alert Component</h1>
                    <Alert foo={'poop'} message='This Is An Alert'/>
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
                        label   = 'Example Switch Off'
                        name    = 'single-switch-on'
                        value   = 'switch1'
                        checked = {this.state.switch1}
                        onClick = {this.toggleSwitch1}
                    />
                    <Switch
                        id       = 'switch-input-on'
                        label    = 'Example Switch On'
                        name     = 'single-switch'
                        value    = 'switch2'
                        checked  = {this.state.switch2}
                        onClick  = {this.toggleSwitch2}
                    />
                </div>
                <div className='section'>
                    <h1 className='h1'>Tooltips</h1>
                    <div className='row'>
                        <Tooltip />
                        <div className='small-12 medium-6'>
                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'top'
                                data-effect = 'fixed'
                            >Fixed Top</span>

                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'right'
                                data-effect = 'fixed'
                            >Fixed Right</span>

                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'bottom'
                                data-effect = 'fixed'
                            >Fixed Bottom</span>
                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'left'
                                data-effect = 'fixed'
                            >Fixed Left</span>
                        </div>
                        <div className='small-12 medium-6'>
                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'top'
                                data-effect = 'float'
                            >Floated Top</span>

                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'right'
                                data-effect = 'float'
                            >Floated Right</span>

                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'bottom'
                                data-effect = 'float'
                            >Floated Bottom</span>
                            <span
                                style       = {{display:'block', width:120}}
                                data-tip    = 'tooltip'
                                data-place  = 'left'
                                data-effect = 'float'
                            >Floated Left</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

export default Demo;
