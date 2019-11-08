import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    
    componentDidUpdate () {
    console.log('[Card] DidUpdate');
    }

    render() {
        console.log('card comp props', this.props.cards);
        const cardItems = this.props.cards.map((card, i) => {
            return (
                <div 
                    key={i}
                    id={card.id} 

                    // showModal={this.props.showModal === card.id}

                    // hideModal = {this.hideModalHandler}
                    // answerButton={e => this.showAnswerHandler(i, e)}
                    // showAnswer={this.state.showAnswer}
                    // timerTime={this.state.timerTime}
                    // startTimer={this.startTimer}

                    className={"col-md-2 card " + (!card.answered ? "notAnsweredCard" : "answeredCard")} 
                    onClick={() => this.props.showModalHandler(i, card.id)}
                    >
                    <p>{card.title}</p>
                    <Modal 
                    // {...this.props}
                    showAnswer={this.props.showAnswer}
                    showModal={card.showModal === card.id}
                    modalHeader={card.modalHeader}
                    question={card.question}
                    answer={card.answer}
                    hideModal = {(e) => this.props.hideModal(e, i)}
                    answerButton={(e) => this.showAnswerHandler(i, e)}
                    timerTime={this.props.timerTime}
                    startTimer={this.props.startTimer}
                    >
                    </Modal>
                </div>
            )
        })
        return (
            <div className="row"> 
            {cardItems}
            </div>
        )
    }
}

// class Card extends Component {
    
//     componentDidUpdate () {
//     console.log('[Card] DidUpdate');
//     }

//     render() {
//         console.log('card comp props', this.props);
//         return (
//             <div 
//             className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
//             onClick={this.props.showModalHandler}
//             >
//             <p>{this.props.title}</p>
//             <Modal {...this.props}>
//             </Modal>
//             </div>
//         )
//     }
// }

export default Card; 