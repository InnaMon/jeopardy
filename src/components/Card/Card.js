import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div 
            className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
            onClick={e => this.props.handleModal(e)}>
            <p>{this.props.title}</p>
            <Modal 
              showModal={this.props.showModal} 
              onClose={this.props.onClose}
              header={this.props.header}
              question={this.props.question} 
              answerButton={this.props.answerButton}
              showAnswer={this.props.showAnswer}
              answer={this.props.answer}
              timerTime={this.props.timerTime}
              startTimer={this.props.startTimer}
            >
            </Modal>
            </div>
        )
    }
}

// class Card extends Component {
//     render() {
//         return (
//             <div 
//             className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
//             onClick={e => this.props.handleModal(e)}>
//             <p>{this.props.children}</p>
//             </div>
//         )
//     }
// }

// class Card extends Component {
//     render() {
//         return (
//             <div 
//             className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
//             onClick={e => this.props.handleModal(e)}
//             id={this.props.key}
//             >
//             {/* <p>{this.props.children}</p> */}
//             <p>{this.props.title}</p>
//             </div>
//         )
//     }
// }

export default Card; 