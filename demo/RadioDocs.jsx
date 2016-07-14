import React, { Component } from 'react';
import Radio from '../src/radio';


class CheckboxDocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioSingleExample: false,
      radioGroupExample: '',
    };

    this.onInputSingleChange = this.onInputSingleChange.bind(this);
    this.onInputGroupChange = this.onInputGroupChange.bind(this);
  }

  onInputSingleChange(e) {
    this.setState({
      radioSingleExample: e.target.checked,
    });
  }

  onInputGroupChange(e) {
    this.setState({
      radioGroupExample: e.target.id,
    });
  }

  render() {
    return (
      <div className="section">
        <h1 className="h1">Radio Component</h1>
        <div>
          <h2 className="h2">Single Radio</h2>
          <Radio
            id="radio-example"
            name="radio-example"
            checked={this.state.radioSingleExample}
            onChange={this.onInputSingleChange}
          />
        </div>
        <div>
          <h2 className="h2">Group of Radio</h2>
          <Radio
            id="radio-example-2"
            name="radio-example-2"
            checked={this.state.radioGroupExample === 'radio-example-2'}
            onChange={this.onInputGroupChange}
          />
          <Radio
            id="radio-example-3"
            name="radio-example-3"
            checked={this.state.radioGroupExample === 'radio-example-3'}
            onChange={this.onInputGroupChange}
          />
        </div>
      </div>
    );
  }

}

export default CheckboxDocs;
