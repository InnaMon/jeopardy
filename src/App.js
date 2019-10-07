import React, { Component } from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import './App.css';

class App extends Component {
  state = {
    showModal: false
  }

  modalHandler = (e) => {
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    return (
      <div className="App">
        <h1>Monjoseph Family Jeopardy!!!</h1>
        <div className="row">
          <Category>Mom</Category>
          <Category>Dad</Category>
          <Category>Kids</Category>
          <Category>Name That Quote</Category>
          <Category>Random</Category>
        </div>
        <div className="row">
          <Card handleModal={this.modalHandler}>
            100
            <Modal show={this.state.showModal} onClose={this.modalHandler}>
              <><h2>Mom: 100 pts</h2>
                <p>Question about murm.</p>
              </>
            </Modal>
          </Card>

          <Card>100</Card>
          <Card>100</Card>
          <Card>100</Card>
          <Card>100</Card>
        </div>
        <div className="row">
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
        </div>
        <div className="row">
          <Card>300</Card>
          <Card>300</Card>
          <Card>300</Card>
          <Card>300</Card>
          <Card>300</Card>
        </div>
        <div className="row">
          <Card>400</Card>
          <Card>400</Card>
          <Card>400</Card>
          <Card>400</Card>
          <Card>400</Card>
        </div>
        <div className="row">
          <Card>500</Card>
          <Card>500</Card>
          <Card>500</Card>
          <Card>500</Card>
          <Card>500</Card>
        </div>
      </div>
    );
  }
}

export default App;
