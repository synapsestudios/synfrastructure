import React, { Component } from 'react';
import AlertDocs from './AlertDocs';
import ButtonDocs from './ButtonDocs';
import IconDocs from './IconDocs';
import CheckboxDocs from './CheckboxDocs';
import RadioDocs from './RadioDocs';
import InputDocs from './InputDocs';
import GridDocs from './GridDocs';

import Button from '../src/button';
import Input from '../src/input';
import Textarea from '../src/textarea';
import Select from '../src/select';
import Label from '../src/label';
import Validation from '../src/validation';
import Modal from '../src/modal';
import Tooltip from '../src/tooltip';
import Switch from '../src/switch';
import Trash from './trash';
import Password from '../src/password';

require('./demo.scss');

class Demo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalView: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalView: true,
    });
  }

  closeModal() {
    this.setState({
      modalView: false,
    });
  }

  renderModal() {
    return (
      <div className="section">
        <h1 className="h1">Modal Component</h1>
        <Button onClick={this.openModal}>Fire Modal</Button>
        <Modal
          reveal={this.state.modalView}
          close={this.closeModal}
          colorTheme="dark"
        >
          <span>Working Modal</span>
          <span onClick={this.closeModal}>Close This Modal</span>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div className="demo__wrapper a--appear">
        <AlertDocs />
        <ButtonDocs />
        <IconDocs />
        <CheckboxDocs />
        <RadioDocs />
        <InputDocs />
        <GridDocs />
        {this.renderModal()}
        <div className="section">
          <h1 className="h1">Tooltips</h1>
          <div className="row">
            <Tooltip />
            <div className="small-12 medium-6">
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="top"
                data-effect="fixed"
              >
                Fixed Top
              </span>
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="right"
                data-effect="fixed"
              >
                Fixed Right
              </span>
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="bottom"
                data-effect="fixed"
              >
                Fixed Bottom
              </span>
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="left"
                data-effect="fixed"
              >
                Fixed Left
              </span>
            </div>
            <div className="small-12 medium-6">
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="top"
                data-effect="float"
              >
                Floated Top
              </span>
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="right"
                data-effect="float"
              >
                Floated Right
              </span>
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="bottom"
                data-effect="float"
              >
                Floated Bottom
              </span>
              <span
                style={{ display: 'block', width: 120 }}
                data-tip="tooltip"
                data-place="left"
                data-effect="float"
              >
                Floated Left
              </span>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="h1">Password</h1>
          <div className="row">
            <div className="small-12 medium-6">
              <Password
                id="password"
                revealIcon={Trash}
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="h1">Controlled Password</h1>
          <div className="row">
            <div className="small-12 medium-6">
              <Password
                id="password"
                revealPassword
                toggleReveal={() => console.log('toggle called')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Demo;
