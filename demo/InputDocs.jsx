import React, { Component } from 'react';
import Input from '../src/input';
import Label from '../src/label';
import Select from '../src/select';
import Switch from '../src/switch';
import Textarea from '../src/textarea';
import Validation from '../src/validation';


class InputDocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputExample: '',
      switch1: true,
      switch2: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.toggleSwitch1 = this.toggleSwitch1.bind(this);
    this.toggleSwitch2 = this.toggleSwitch2.bind(this);
  }

  onInputChange(e) {
    this.setState({
      inputExample: e.target.value,
    });
  }

  toggleSwitch1() {
    this.setState({
      switch1: !this.state.switch1,
    });
  }

  toggleSwitch2() {
    this.setState({
      switch2: !this.state.switch2,
    });
  }

  render() {
    return (
      <div className="section">
        <h1 className="h1">Input Component</h1>
        <div className="subsection">
          <h2 className="h2">Plain input</h2>
          <Input
            id="input-example"
            name="input-example"
            value={this.state.inputExample}
            onChange={this.onInputChange}
          />
        </div>
        <div className="subsection">
          <h2 className="h2">Input wrapped with a label</h2>
          <Label
            htmlFor="input-example-2"
            text="This is a label"
          >
            <Input
              id="input-example-2"
              name="input-example-2"
              placeholder="And this is an input with placeholder text"
            />
          </Label>
        </div>
        <div className="subsection">
          <h2 className="h2">Input Component Validated (arrays)</h2>
          <Validation
            errors={['this is an error message', 'another error']}
            successMessages={['this is a success message', 'another success']}
            warnings={['this is a warning message', 'another warning']}
          >
            <Input id="example5" />
          </Validation>
        </div>
        <div className="subsection">
          <h2 className="h2">Input Component Validated (strings)</h2>
          <Validation
            errors="this is an error"
            successMessages="this is a success"
            warnings="this is a warning"
          >
            <Input id="example5" />
          </Validation>
        </div>
        <div className="subsection">
          <h2 className="h2">Textarea Component</h2>
          <Textarea id="example3" />
        </div>
        <div className="subsection">
          <h2 className="h2">Select Component</h2>
          <Select
            id="example4"
            options={[
              {
                text: 'Option 1',
                value: 'option-1',
                selected: true,
              },
              {
                text: 'Option 2',
                value: 'option-2',
                selected: false,
              },
              {
                text: 'Option 3',
                value: 'option-3',
                selected: false,
              },
            ]}
          />
        </div>
        <div className="subsection">
          <h2 className="h2">Select Component (Custom Icon/Wrapper)</h2>
          <Select
            id="example5"
            customIcon={String.fromCharCode(9660)}
            componentWrapCSSClassName="super-custom__wrapper"
            options={[
              {
                text: 'Option 1',
                value: 'option-1',
                selected: true,
              },
              {
                text: 'Option 2',
                value: 'option-2',
                selected: false,
              },
              {
                text: 'Option 3',
                value: 'option-3',
                selected: false,
              },
            ]}
          />
        </div>
        <div className="subsection">
          <h2 className="h2">Switches</h2>
          <Switch
            id="switch-input"
            label="Example Switch Off"
            name="single-switch-on"
            value={this.state.switch1}
            checked={this.state.switch1}
            onClick={this.toggleSwitch1}
          />
          <Switch
            id="switch-input-on"
            label="Example Switch On"
            name="single-switch"
            value={this.state.switch2}
            checked={this.state.switch2}
            onClick={this.toggleSwitch2}
          />
        </div>
      </div>
    );
  }

}

export default InputDocs;
