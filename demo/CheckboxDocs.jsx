import React, { Component } from 'react';
import Checkbox from '../src/checkbox';


class CheckboxDocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxExample: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      checkboxExample: e.target.checked,
    });
  }

  render() {
    return (
      <div className="section">
        <h1 className="h1">Checkbox Component</h1>
        <Checkbox
          id="example6"
          name="checkbox-example6"
          checked={this.state.checkboxExample}
          onChange={this.onInputChange}
        />
      </div>
    );
  }

}

export default CheckboxDocs;
