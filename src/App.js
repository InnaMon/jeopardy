import React, { Component } from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import './App.css'; 

class App extends Component {
  state = {
    cards: [
      {
        title: '100',
        modalHeader: 'Mom: 100 pts',
        question: 'What is Moms favorite color?',
        answer: 'All shades of green'
      },
      {
        title: '200',
        modalHeader: 'Mom: 200 pts',
        question: 'What year did mom enrolls to NCC?',
        answer: '2008'
      },
      {
        title: '300',
        modalHeader: 'Mom: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter'
      },
      {
        title: '400',
        modalHeader: 'Mom: 400 pts',
        question: 'Who did mom work as in Russia?',
        answer: 'Приома Здачя'
      },
      {
        title: '500',
        modalHeader: 'Mom: 500 pts',
        question: 'Mom’s favorite author/book?',
        answer: 'Кристина Рой Дорогой ценой'
      }
    ],
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

  // modalHandler = (answer) => {
  //   if (answer === this.props.answer) {
  //     this.setState({
  //       showModal: !this.state.showModal
  //     });
  //     this.resetCountDown();
  //   }
  // }

  //TO DO: ADD A UNIQUE ID TO EACH MODAL SO THAT ONLY ONE MODAL IS TRIGGERED AT A GIVEN TIME 
  // https://hub.packtpub.com/creating-reusable-generic-modals-react-and-redux/

  showAnswerHandler = (e) => {
    e.stopPropagation();
    this.setState({
      answered: true,
      showAnswer: true,
      timerTime: 0
    })
  }

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

  render() {
    const cards = this.state.cards.map((card, i) => {
      return <Card
      key={Math.floor(Math.random(i + 5))}
      title={this.state.cards[i].title}
      modalHeader={this.state.cards[i].modalHeader}
      question={this.state.cards[i].question}
      answer={this.state.cards[i].answer} 
      handleModal={this.modalHandler} 
      answered={this.state.answered}
      showModal={this.state.showModal}
      answerButton={this.showAnswerHandler}
      showAnswer={this.state.showAnswer}
      timerTime={this.state.timerTime}
      startTimer={this.startTimer}
      />
    })
    return (
      <div className="App">
        <h1>Monjoseph Family Jeopardy!!!</h1>

        <div className="row">
          <Category>Mom</Category>
          <Category>Dad</Category>
          <Category>Lily</Category>
          <Category>Name That Wedding</Category>
          <Category>Random</Category>
        </div>

        <div className="row">
          <div className="column">
            {cards}
          </div>
          <div className="column">
            {cards}
          </div>
          <div className="column">
            {cards}
          </div>
          <div className="column">
            {cards}
          </div>
          <div className="column">
            {cards}
          </div>
        </div>

        {/* <div className="row">
          <Card handleModal={this.modalHandler} answered={this.state.answered}>
            100
            <div>
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
            </div>
          </Card>

          <Card
              handleModal={this.modalHandler} 
              answered={this.state.answered}
              showModal={this.state.showModal} 
              onClose={this.modalHandler} 
              answerButton={this.showAnswerHandler}
              showAnswer={this.state.showAnswer}
              answer={<div>The answer is...</div>}
              timerTime={this.state.timerTime}
              startTimer={this.startTimer}
              header={<h2>Dad: 100 pts</h2>}
              question={<p>Question about dad.</p>}
            >
            100
          </Card>

          <Card>
            100
          </Card>

          <Card>
            100
          </Card>

          <Card>
            100
          </Card> 

        </div> */}

        {/* <div className="row">
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
        </div> */}
      </div>
    );
  }
}

export default App;