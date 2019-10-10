import React, { Component } from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import './App.css'; 
import Timer from './components/Timer/Timer';

class App extends Component {
  state = {
    showModal: false,
    answered: false,
    showAnswer: false,
    timerOn: false,
    timerTime: 60
    // timerStart: 0
  }

  modalHandler = (e) => {
    this.setState({showModal: !this.state.showModal});
  }

  showAnswerHandler = (e) => {
    e.stopPropagation();
    this.setState({
      answered: true,
      showAnswer: true
    })
  }
  
  startCountDown = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime
      // timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      let newTime = this.state.timerTime - 1;
      this.setState({
        timerTime: newTime
      })
      if(newTime <= 0) {
        clearInterval(this.timer);
      }
    }, 1000)
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
          <Card handleModal={this.modalHandler} answered={this.state.answered}>
            100
            <Modal 
              showModal={this.state.showModal} 
              onClose={this.modalHandler} 
              answerButton={this.showAnswerHandler}
              showAnswer={this.state.showAnswer}
              answer={<div>The answer is...</div>}
              timerTime={this.state.timerTime}
              startTimer={this.startCountDown}
            >
              <>
                <h2>Mom: 100 pts</h2>
                <p>Question about murm.</p>
              </>
            </Modal>
            <Timer startTime={this.startCountDown()}>{this.state.timerTime}</Timer>
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
