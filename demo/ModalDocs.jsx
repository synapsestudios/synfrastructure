import React, { Component } from 'react';
import Button from '../src/button';
import Modal from '../src/modal';


class ModalDocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalVisible: true,
    });
  }

  closeModal() {
    this.setState({
      isModalVisible: false,
    });
  }

  render() {
    return (
      <div className="section">
        <h1 className="h1">Modal Component</h1>
        <Button onClick={this.openModal}>Fire Modal</Button>
        <Modal
          reveal={this.state.isModalVisible}
          close={this.closeModal}
          colorTheme="dark"
        >
          <span>Working Modal</span>
          <span onClick={this.closeModal}>Close This Modal</span>
        </Modal>
      </div>
    );
  }

}

export default ModalDocs;
