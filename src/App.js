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
        id: 1,
        answered: false,
        showModal: 0
      },
      {
        title: '200',
        modalHeader: 'Mom: 200 pts',
        question: 'What year did mom enrolls to NCC?',
        answer: '2008',
        id: 2,
        answered: false,
        showModal: 0
      },
      {
        title: '300',
        modalHeader: 'Mom: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter',
        id: 3,
        answered: false,
        showModal: 0
      },
      {
        title: '400',
        modalHeader: 'Mom: 400 pts',
        question: 'Who did mom work as in Russia?',
        answer: 'Приома Здачя',
        id: 4,
        answered: false,
        showModal: 0
      },
      {
        title: '500',
        modalHeader: 'Mom: 500 pts',
        question: 'Mom’s favorite author/book?',
        answer: 'Кристина Рой Дорогой ценой',
        id: 5,
        answered: false,
        showModal: 0
      },
      {
        title: '100',
        modalHeader: 'Dad: 100 pts',
        question: 'What is Moms favorite color?',
        answer: 'All shades of green',
        id: 1,
        answered: false
      },
      {
        title: '200',
        modalHeader: 'Dad: 200 pts',
        question: 'What year did mom enrolls to NCC?',
        answer: '2008',
        id: 2,
        answered: false
      },
      {
        title: '300',
        modalHeader: 'Dad: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter',
        id: 3,
        answered: false
      },
      {
        title: '400',
        modalHeader: 'Dad: 400 pts',
        question: 'Who did mom work as in Russia?',
        answer: 'Приома Здачя',
        id: 4,
        answered: false
      },
      {
        title: '500',
        modalHeader: 'Dad: 500 pts',
        question: 'Mom’s favorite author/book?',
        answer: 'Кристина Рой Дорогой ценой',
        id: 5,
        answered: false
      },
      {
        title: '100',
        modalHeader: 'Lily: 100 pts',
        question: 'What is Moms favorite color?',
        answer: 'All shades of green',
        id: 1,
        answered: false
      },
      {
        title: '200',
        modalHeader: 'Lily: 200 pts',
        question: 'What year did mom enrolls to NCC?',
        answer: '2008',
        id: 2,
        answered: false
      },
      {
        title: '300',
        modalHeader: 'Lily: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter',
        id: 3,
        answered: false
      },
      {
        title: '400',
        modalHeader: 'Lily: 400 pts',
        question: 'Who did mom work as in Russia?',
        answer: 'Приома Здачя',
        id: 4,
        answered: false
      },
      {
        title: '500',
        modalHeader: 'Lily: 500 pts',
        question: 'Mom’s favorite author/book?',
        answer: 'Кристина Рой Дорогой ценой',
        id: 5,
        answered: false
      },
      {
        title: '100',
        modalHeader: 'Wedding Bells: 100 pts',
        question: 'What is Moms favorite color?',
        answer: 'All shades of green',
        id: 1,
        answered: false
      },
      {
        title: '200',
        modalHeader: 'Wedding Bells: 200 pts',
        question: 'What year did mom enrolls to NCC?',
        answer: '2008',
        id: 2,
        answered: false
      },
      {
        title: '300',
        modalHeader: 'Wedding Bells: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter',
        id: 3,
        answered: false
      },
      {
        title: '400',
        modalHeader: 'Wedding Bells: 400 pts',
        question: 'Who did mom work as in Russia?',
        answer: 'Приома Здачя',
        id: 4,
        answered: false
      },
      {
        title: '500',
        modalHeader: 'Wedding Bells: 500 pts',
        question: 'Mom’s favorite author/book?',
        answer: 'Кристина Рой Дорогой ценой',
        id: 5,
        answered: false
      },
      {
        title: '100',
        modalHeader: 'Random: 100 pts',
        question: 'What is Moms favorite color?',
        answer: 'All shades of green',
        id: 1,
        answered: false
      },
      {
        title: '200',
        modalHeader: 'Random: 200 pts',
        question: 'What year did mom enrolls to NCC?',
        answer: '2008',
        id: 2,
        answered: false
      },
      {
        title: '300',
        modalHeader: 'Random: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter',
        id: 3,
        answered: false
      },
      {
        title: '400',
        modalHeader: 'Random: 400 pts',
        question: 'Who did mom work as in Russia?',
        answer: 'Приома Здачя',
        id: 4,
        answered: false
      },
      {
        title: '500',
        modalHeader: 'Random: 500 pts',
        question: 'Mom’s favorite author/book?',
        answer: 'Кристина Рой Дорогой ценой',
        id: 5,
        answered: false
      }
    ],
    // showModal: 0,
    // answered: false,
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

  // shouldComponentUpdate ( nextProps, nextState ) {
  //   return this.state.timerTime !== nextState.timerTime;
  // }

  componentDidUpdate () {
    console.log('[App] DidUpdate');
  }

  showModalHandler = (index, value) => {
    const {...cardsArray } = this.state.cards;
    cardsArray[index].showModal = value;
    console.log('showModal', cardsArray[index].showModal);
    this.setState({
      cardsArray
    });
    this.resetCountDown();
  }

  hideModalHandler = (e, index) => {
    e.stopPropagation() //stops the bubble phase of event propogation 
    const {...cardsArray} = this.state.cards;
    cardsArray[index].showModal = 0;
    this.setState({
      cardsArray
    });
    console.log('close modal');
  }

  showAnswerHandler = (index, e) => {
    console.log('answered?', this.state.cards[index].answered);
    const { ...cardsArray } = this.state.cards;
    cardsArray[index].answered = true;
    console.log('cards in answer handler', cardsArray[index].answered);
    e.stopPropagation();
    this.setState({
      cardsArray,
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
    console.log('card state', this.state); 

    // const cards = this.state.cards.map((card, i) => {
    //   console.log('card', card);
    //   return <Card
    //   key={i}
    //   title={card.title}
    //   modalHeader={card.modalHeader}
    //   question={card.question}
    //   answer={card.answer}
    //   id={card.id} 
    //   answered={card.answered}

    //   showModal={this.state.showModal === card.id}
    //   showModalHandler = {() => this.showModalHandler(card.id)}
    //   hideModal = {this.hideModalHandler}
    //   answerButton={e => this.showAnswerHandler(i, e)}
    //   showAnswer={this.state.showAnswer}
    //   timerTime={this.state.timerTime}
    //   startTimer={this.startTimer}
    //   />
    // })

    return (
      <div className="container-fluid">
        <div className="row">
        <h1>Monjoseph Family Jeopardy!!!</h1>

          <div className="col-md-12 categories">
            <Category>Mom</Category>
            <Category>Dad</Category>
            <Category>Lily</Category>
            <Category>Wedding Bells</Category>
            <Category>Random</Category>
          </div>

          <div className="col-md-12 cards">
            <Card 
            cards={this.state.cards}
            showModal={this.state.showModal}
            showAnswer={this.state.showAnswer}
            timerTime={this.state.timerTime}
            showModalHandler = {this.showModalHandler}
            hideModal = {this.hideModalHandler}
            answerButton={this.showAnswerHandler}
            startTimer={this.startTimer}
            />
          </div>
      
        </div>
      </div>
    );
  }
}

export default App;

//refactor code to handle the showAnswer  handler within each individial card item 
// instead of as a global variable availbe to all items