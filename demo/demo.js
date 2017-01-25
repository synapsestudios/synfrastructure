import React, { Component } from 'react';

import Modal from '../src/Modal';
import Label from '../src/Label';
import Checkbox from '../src/Checkbox';
import Radio from '../src/Radio';

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      checkboxChecked: false,
      radioChecked: false,
    };
  }
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.setState({ modalVisible: true })}
        >
          Show Modal
        </button>
        <Modal
          isVisible={this.state.modalVisible}
          onClose={() => this.setState({ modalVisible: false })}
        >
          Hello world
        </Modal>
        <Label>
          A checkbox:
          <Checkbox
            id="checkbox"
            tabIndex="0"
            checked={this.state.checkboxChecked}
            onChange={() => this.setState({ checkboxChecked: !this.state.checkboxChecked })}
          />
        </Label>
        <Label>
          A radio:
          <Radio
            id="radio"
            tabIndex="0"
            checked={this.state.radioChecked}
            onChange={() => this.setState({ radioChecked: !this.state.radioChecked })}
          />
        </Label>
      </div>
    );
  }
}

export default Demo;
