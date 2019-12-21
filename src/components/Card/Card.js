import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    
    componentDidUpdate () {
    console.log('[Card] DidUpdate');
    }

    render() {
        const cardItems = this.props.cards.map((card, i) => {
            return (
                <div 
                    key={i}
                    id={card.id} 
                    className={"col-md-2 card " + (!card.answered ? "notAnsweredRedCard" : "answeredCard")} 
                    onClick={() => this.props.showModalHandler(i, card.id)}
                    >
                    <p>{card.title}</p>
                    <Modal 
                    showAnswer={card.showAnswer}
                    showModal={card.showModal === card.id}
                    modalHeader={card.modalHeader}
                    question={card.question}
                    answer={card.answer}
                    hideModal = {(e) => this.props.hideModal(e, i)}
                    answerButton={(e) => this.props.showAnswerHandler(e, i)}
                    timerTime={this.props.timerTime}
                    starttimer={this.props.starttimer}
                    >
                    </Modal>
                </div>
            )
        })
        return (
            <div className="card-row"> 
            {cardItems}
            </div>
        )
    }
}

export default Card; 