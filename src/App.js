import React, { Component } from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card';
import './App.css'; 

class App extends Component {
  state = {
    cards: [
      {
        title: '100',
        modalHeader: 'Mom: 100 pts',
        question: 'What is Moms favorite color?',
        answer: 'All shades of green',
        id: 1
      },
      {
        title: '200',
        modalHeader: 'Mom: 200 pts',
        question: 'What year did mom enrolls to NCC?',
        answer: '2008',
        id: 2
      },
      {
        title: '300',
        modalHeader: 'Mom: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter',
        id: 3
      },
      {
        title: '400',
        modalHeader: 'Mom: 400 pts',
        question: 'Who did mom work as in Russia?',
        answer: 'Приома Здачя',
        id: 4
      },
      {
        title: '500',
        modalHeader: 'Mom: 500 pts',
        question: 'Mom’s favorite author/book?',
        answer: 'Кристина Рой Дорогой ценой',
        id: 5
      }
    ],
    showModal: 0,
    answered: false,
    showAnswer: false,
    timerTime: 60
  }

  // shouldComponentUpdate ( nextProps, nextState ) {
  //   if (this.state.cards === nextState.cards &&
  //     this.state.showModal === nextState.showModal &&
  //     this.state.answered === nextState.answered &&
  //     this.state.showAnswer === nextState.showAnswer &&
  //     this.state.timerTime !== nextState.timerTime) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  // }

  // componentDidUpdate () {
  //   console.log('[App] DidUpdate');
  // }

  showModalHandler = value => {
    this.setState({
      showModal: value
    });
    this.resetCountDown();
  }

  hideModalHandler = e => {
    e.stopPropagation()
    this.setState({
      showModal: 0
    });
    // this.resetCountDown();
    console.log('close modal');
  }

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

  // TO DO: assess this code https://codesandbox.io/s/pkjvy72mw0
  // RESOURCES: https://stackoverflow.com/questions/54276832/react-how-to-display-a-modal-popup-only-for-that-specific-div

  render() {

    const cards = this.state.cards.map((card, i) => {
      console.log('card', card);
      return <Card
      key={i}
      title={card.title}
      modalHeader={card.modalHeader}
      question={card.question}
      answer={card.answer}
      id={card.id} 
      showModal={this.state.showModal === card.id}
      showModalHandler = {() => this.showModalHandler(card.id)}
      hideModal = {this.hideModalHandler}
      answered={this.state.answered}
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

          {/* <div className="column">
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          </div>

          <div className="column">
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          </div>

          <div className="column">
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          </div>
          
          <div className="column">
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          <Card>200</Card>
          </div> */}

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