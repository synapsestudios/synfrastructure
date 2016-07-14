import React, { Component } from 'react';
import Input from '../src/input';
import Label from '../src/label';
import Validation from '../src/validation';


class InputDocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputExample: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      inputExample: e.target.value,
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
      </div>
    );
  }

}

export default InputDocs;
