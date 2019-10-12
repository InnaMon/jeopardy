import React, { Component } from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import './App.css'; 

class App extends Component {
  state = {
    showModal: false,
    answered: false,
    showAnswer: false,
    timerTime: 60
  }

  modalHandler = (e) => {
    this.setState({
      showModal: !this.state.showModal
    });
    this.resetCountDown();
  }

  showAnswerHandler = (e) => {
    e.stopPropagation();
    this.setState({
      answered: true,
      showAnswer: true,
      timerTime: 0
    })
  }
  
  // startTimer = () => {
  //   this.timer = setInterval(() => {
  //     let newTime = this.state.timerTime - 1;
  //     if (this.state.timerTime > 0) {
  //       this.setState({
  //         timerOn: true,
  //         timerTime: newTime
  //       })
  //     } else {
  //       clearInterval(this.timer);
  //       this.setState({timerOn: false})
  //     }
  //   }, 1000)
  // }

  startTimer = () => {
    this.timer = setTimeout(() => {
      let newTime = this.state.timerTime - 1;
      if (this.state.timerTime > 0) {
        this.setState({
          timerTime: newTime
        })
      } else {
        clearInterval(this.timer);
      }
    }, 1000)
  }

  resetCountDown = () => {
    this.setState({timerTime: 60})
  }

  //write a reset function and inclide insdie the modalHandler function

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
          <Card handleModal={this.modalHandler} answered={this.state.answered}>
            100
            <Modal 
              showModal={this.state.showModal} 
              onClose={this.modalHandler} 
              answerButton={this.showAnswerHandler}
              showAnswer={this.state.showAnswer}
              answer={<div>The answer is...</div>}
              timerTime={this.state.timerTime}
              startTimer={this.startTimer}
            >
              <>
                <h2>Mom: 100 pts</h2>
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
