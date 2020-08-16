import React, { Component } from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card';
import './App.css'; 

class App extends Component {
  state = {
    cards: [
      {
        title: '100',
        modalHeader: 'Sports: 100 pts',
        question: 'What the Europeans call association football, we call this',
        answer: 'soccer',
        id: 1,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Animals: 100 pts',
        question: 'Its legs are 6 feet long & its neck can be even longer',
        answer: 'a giraffe',
        id: 2,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'Science: 100 pts',
        question: 'Isaac Newton published his first mathematical formulation for this fundamental force in 1687',
        answer: 'gravity',
        id: 3,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'History: 100 pts',
        question: 'The cargo of the Beaver, Eleanor & Dartmouth got dumped in this December 1773 incident',
        answer: 'the Boston Tea Party',
        id: 4,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '100',
        modalHeader: 'People: 100 pts',
        question: "On his 2011 passing Apple said, 'The world is immeasurably better because of' him",
        answer: 'Steve Jobs',
        id: 5,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Sports: 200 pts',
        question: "Buster Douglas' 1990 knockout of this champ has been called the greatest heavyweight title upset",
        answer: 'Mike Tyson',
        id: 6,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Animals: 200 pts',
        question: "In a children's tale, Jack traded one of these barnyard animals for some magic beans",
        answer: 'cow',
        id: 7,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'Science: 200 pts',
        question: 'By definition, this adjective describes certain organisms that can or must live in the absence of oxygen',
        answer: 'anaerobic',
        id: 8,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'History: 200 pts',
        question: 'Napoleon & his troops captured Cairo in the 1798 battle of these landmarks',
        answer: 'the Pyramids',
        id: 9,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '200',
        modalHeader: 'People: 200 pts',
        question: "This fashion designer created dresses worn in the movie 'Bride Wars' and in the TV series 'Gossip Girl'",
        answer: 'Vera Wang',
        id: 10,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Sports: 300 pts',
        question: "On April 13, 1997 this 21-year-old golfer became the youngest to win the Masters",
        answer: 'Tiger Woods',
        id: 11,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Animals: 300 pts',
        question: 'The bulls of this tusked aquatic mammal also known as the morse may weigh over 3,000 pounds',
        answer: 'the walrus',
        id: 12,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'Science: 300 pts',
        question: 'This name of the infectious disease caused by the Epstein-Barr virus comes from words meaning "one" & "kernel"',
        answer: 'mononucleosis',
        id: 13,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'History: 300 pts',
        question: 'In 1429, she was given control of troops in France',
        answer: 'Joan of Arc',
        id: 14,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '300',
        modalHeader: 'People: 300 pts',
        question: "In Feb. 2012 New Jersey's governor ordered flags be flown half-staff during the funeral of this Newark-born singer",
        answer: 'Whitney Houston',
        id: 15,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Sports: 400 pts',
        question: 'After winning 5 NBA championships, the Lakers moved to Los Angeles in 1960 from this city',
        answer: 'Minneapolis',
        id: 16,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Animals: 400 pts',
        question: '"The Encyclopedia of Mammals" calls it the most heavily armored mammal alive today',
        answer: 'armadillo',
        id: 17,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'Science: 400 pts',
        question: 'In testing out gases by smelling them (not a good idea) Humphry Davy found in 1800 that this one made him feel giddy',
        answer: 'nitrous oxide (or laughing gas)',
        id: 18,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'History: 400 pts',
        question: "Tradition says this country's first emperor, Menelik I, was the son of King Solomon & the Queen of Sheba",
        answer: 'Ethiopia',
        id: 19,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '400',
        modalHeader: 'People: 400 pts',
        question: "Visitors to the Sundance Film Festival know that the Sundance Institute was founded by this man in 1981",
        answer: 'Robert Redford',
        id: 20,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Sports: 500 pts',
        question: 'On November 30, 1996 this Bulls player became the 10th in NBA history to reach 25,000 career points',
        answer: 'Michael Jordan',
        id: 21,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Animals: 500 pts',
        question: 'Found chiefly in Australia, the wallaby is a smaller type of this marsupial',
        answer: 'Kangaroo',
        id: 22,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'Science: 500 pts',
        question: 'Developed by Edward Jenner, the first true vaccine was designed to protect against this disease',
        answer: 'Smallpox',
        id: 23,
        answered: false,
        showModal: 0,
        showAnswer: false
      },
      {
        title: '500',
        modalHeader: 'History: 500 pts',
        question: 'Circa 950, under Harald Bluetooth, this was 1st Scandinavian country unified under just 1 king',
        answer: 'Denmark',
        id: 24,
        answered: false,
        showModal: 0,
        showAnswer: false
      }, 
      {
        title: '500',
        modalHeader: 'People: 500 pts',
        question: 'When he auctioned off his wacky wardrobe, his Pinball Wizard boots sold for over $20,000',
        answer: 'Elton John',
        id: 25,
        answered: false,
        showModal: 0,
        showAnswer: false
      }
    ],
    timerTime: 60
  }

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

  render() {
    return (
      <div className="container-fluid">
        <div className="row header-bg">
          <h1>Jeopardy!!!</h1>
        </div>
        
        <div className="row row-padding">
        

          <div className="col-md-12 categories">
            <Category>Sports</Category>
            <Category>Animals</Category>
            <Category>Science</Category>
            <Category>History</Category>
            <Category>People</Category>
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

          <div className="col-md-12">
            <button className="refresh-btn" onClick={() => window.location.reload(false)}>Play Again!</button>
          </div>
      
        </div>
      </div>
    );
  }
}

export default App;

//TO DO: make sure background is frozen when modal is displayed