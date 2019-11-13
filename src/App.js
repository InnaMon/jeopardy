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
        question: 'What is Moms favorite color',
        answer: 'All shades of green',
        id: 1,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Dad: 100 pts',
        question: 'Which city was dad born in',
        answer: 'Midvodi',
        id: 2,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Lily: 100 pts',
        question: 'What origin is the name Lily',
        answer: 'Old English and Latin',
        id: 3,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Wedding Bells: 100 pts',
        question: 'What is the most popular wedding month',
        answer: 'June',
        id: 4,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Random: 100 pts',
        question: 'Name the largest freshwater lake in the world',
        answer: 'Lake Superior',
        id: 5,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Mom: 200 pts',
        question: 'What year did mom enrolls to NCC',
        answer: '2008',
        id: 6,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Dad: 200 pts',
        question: 'Where did dad serve in the military',
        answer: 'Siberia (Taiga)',
        id: 7,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Lily: 200 pts',
        question: 'Which famous nurse was known as “The Lady Of The Lamp” during the crimean war',
        answer: 'Florence Nightingale',
        id: 8,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Wedding Bells: 200 pts',
        question: 'Most popular wedding destination',
        answer: 'Las Vegas',
        id: 9,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Random: 200 pts',
        question: 'What is the world’s longest river',
        answer: 'Amazon',
        id: 10,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Mom: 300 pts',
        question: 'What are the names of grandparents that raised mom',
        answer: 'Grandma Polya and grandpa Peter',
        id: 11,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Dad: 300 pts',
        question: 'Who did dad want to be when he was a kid',
        answer: 'Driver',
        id: 12,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Lily: 300 pts',
        question: 'What climates do lilies grow the best',
        answer: 'Tropical',
        id: 13,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Wedding Bells: 300 pts',
        question: 'How much does an avergae engagment ring cost',
        answer: '$6,163',
        id: 14,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Random: 300 pts',
        question: 'Name the world’s biggest island',
        answer: 'Greenland',
        id: 15,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Mom: 400 pts',
        question: 'Who did mom work as in Russia',
        answer: 'Приома Здачя',
        id: 16,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Dad: 400 pts',
        question: 'How old was dad when he got his first motorcycle',
        answer: '14',
        id: 17,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Lily: 400 pts',
        question: 'In England in 2011, Lily was the ___ most popular name for baby girls',
        answer: '3rd',
        id: 18,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Wedding Bells: 400 pts',
        question: 'What year did Princess Diance and Prince Charles of Wales get married',
        answer: '1981',
        id: 19,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Random: 400 pts',
        question: 'Which was the country that first made the use of paper money',
        answer: 'China',
        id: 20,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Mom: 500 pts',
        question: 'Mom’s favorite author/book',
        answer: 'Кристина Рой Дорогой ценой',
        id: 21,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Dad: 500 pts',
        question: 'How many years did dad sing in the church choir in Russia',
        answer: 'Six',
        id: 22,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Lily: 500 pts',
        question: 'What did the Greek associate Lilies with',
        answer: 'Motherhood',
        id: 23,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Wedding Bells: 500 pts',
        question: ' How many times was Elizabeth Taylor married',
        answer: 'Eight',
        id: 24,
        answered: false,
        showModal: 0,
        showAnswer: false
      }, 
      {
        title: '500',
        modalHeader: 'Random: 500 pts',
        question: 'Define Nomophobia',
        answer: 'The phobia is characterized by feelings of anxiety that arise from being out of a phone’s range of service, not having one’s phone charged, having no credit on one’s phone or misplacing it.',
        id: 25,
        answered: false,
        showModal: 0,
        showAnswer: false
      }
    ],
    timerTime: 60
  }

  // shouldComponentUpdate ( nextProps, nextState ) {
  //   if (this.state.cards === nextState.cards &&
  //     this.state.timerTime !== nextState.timerTime) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  // }

  // https://www.freecodecamp.org/news/how-to-identify-and-resolve-wasted-renders-in-react-cc4b1e910d10/
  // GOOGLE SEARCH: 'how to render only part of react app that updates state'

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

  showAnswerHandler = (e, index) => {
    e.stopPropagation();
    console.log('answered?', this.state.cards[index].answered);
    const { ...cardsArray } = this.state.cards;
    cardsArray[index].answered = true;
    cardsArray[index].showAnswer = true;
    this.setState({
      cardsArray,
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

  // MODAL RESOURCE: assess this code https://codesandbox.io/s/pkjvy72mw0
  // RESOURCES: https://stackoverflow.com/questions/54276832/react-how-to-display-a-modal-popup-only-for-that-specific-div

  render() {
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
            showModalHandler = {this.showModalHandler}
            hideModal = {this.hideModalHandler}
            showAnswerHandler={this.showAnswerHandler}
            starttimer={this.startTimer}
            timerTime={this.state.timerTime}
            />
          </div>
      
        </div>
      </div>
    );
  }
}

export default App;

//TO DO: make sure background is frozen when modal is displayed