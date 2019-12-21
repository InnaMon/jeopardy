import React, { Component } from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card';
import './App.css'; 

class App extends Component {
  state = {
    cards: [
      {
        title: '100',
        modalHeader: 'Around the World: 100 pts',
        question: 'What country started the tradition of Christmas trees',
        answer: 'Germany',
        id: 1,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Bible: 100 pts',
        question: 'How many angels spoke to the shepherds',
        answer: 'One',
        id: 2,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Russian: 100 pts',
        question: 'What do the children have to do for Ded Moroz and Snegurochka to show up',
        answer: 'Hold hands with each other and stand around the Christmas tree',
        id: 3,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'American: 100 pts',
        question: 'What are Christmas songs called',
        answer: 'Carols',
        id: 4,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Santa: 100 pts',
        question: 'What is the American-English name for Santa',
        answer: 'Kris Kringle',
        id: 5,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Around the World: 200 pts',
        question: 'In which country is Christmas a romantic holiday typically celebrated by couples',
        answer: 'Japan',
        id: 6,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Bible: 200 pts',
        question: 'Who was the prophet that foretold a virgin shall give birth to a son called Immanuel',
        answer: 'Isaiah',
        id: 7,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Russian: 200 pts',
        question: 'What does Ded Maroz carry with him',
        answer: 'A staff',
        id: 8,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'American: 200 pts',
        question: 'What does the color red symbolize in relation to the traditional Christmas color',
        answer: 'The blood of Jesus in the crucifixion',
        id: 9,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Santa: 200 pts',
        question: 'Santa is called Père Noël or Papa Noëlin in this country',
        answer: 'France',
        id: 10,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Around the World: 300 pts',
        question: 'In what country do children put their shoes on the windowsill so the Juletide Lads, the Santa Claus, can fill their shoes with little goodies',
        answer: 'Iceland',
        id: 11,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Bible: 300 pts',
        question: 'What was Jesus approximate age when the wise men presented Him with gifts',
        answer: '2 years old',
        id: 12,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Russian: 300 pts',
        question: 'How does Ded Moroz get around Russia',
        answer: 'By taking a troika, a sleigh led by three horses',
        id: 13,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'American: 300 pts',
        question: 'Which country is the leading exporter of Christmas trees',
        answer: 'Canada',
        id: 14,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Santa: 300 pts',
        question: 'Santa is called Babbo Natale in this country',
        answer: 'Italy',
        id: 15,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Around the World: 400 pts',
        question: 'In which country do Children receive gifts from the Befana(an imaginary, ugly, old lady who rides a broomstick through the air and is friends with Father Christmas)',
        answer: 'Italy',
        id: 16,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Bible: 400 pts',
        question: 'Which direction did the wise men travel to, going to Jerusalem',
        answer: 'Westward',
        id: 17,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Russian: 400 pts',
        question: 'Russian Orthodox Christmas takes place on which day',
        answer: 'January 7th',
        id: 18,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'American: 400 pts',
        question: 'What story inspired the gingerbread house',
        answer: 'Hansel and gretel',
        id: 19,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Santa: 400 pts',
        question: 'Santa is called Święty Mikołaj (lit. Saint Nicholas) in this country',
        answer: 'Poland',
        id: 20,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Around the World: 500 pts',
        question: 'What country holds the special tradition of having a Christmas lantern, which is called paról; the lantern is star-shaped, remembering the star of Bethlehem, and mainly made out of bamboo and paper',
        answer: 'The Philippines',
        id: 21,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Bible: 500 pts',
        question: 'When was the first Christmas celebrated after Jesus died',
        answer: 'December 25th, 336 A.D.',
        id: 22,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Russian: 500 pts',
        question: 'Christmas trees were banned in Russia in what year',
        answer: '1935',
        id: 23,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'American: 500 pts',
        question: 'What does the world NOEL mean',
        answer: 'Birth',
        id: 24,
        answered: false,
        showModal: 0,
        showAnswer: false
      }, 
      {
        title: '500',
        modalHeader: 'Santa: 500 pts',
        question: 'Santa is called  Noel Baba in this country',
        answer: 'Turkey',
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
        <h1>Christmas Jeopardy!!!</h1>

          <div className="col-md-12 categories">
            <Category>Around the World</Category>
            <Category>Bible</Category>
            <Category>Russian</Category>
            <Category>American</Category>
            <Category>Santa</Category>
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