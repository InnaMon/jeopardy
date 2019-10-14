import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div 
            className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
            // onClick={e => this.props.handleModal(this.props.key)}
            showModal={this.props.showModal}
            onClick={() => this.props.showModalHandler(this.props.id)}>
            <p>{this.props.title}</p>
            <Modal 
              key={this.props.key}
              showModal={this.props.showModal} 
              hideModal={this.props.hideModal}
            //   onClose={this.props.onClose}
              header={this.props.header}
              question={this.props.question} 
              answer={this.props.answer}
              answerButton={this.props.answerButton}
              showAnswer={this.props.showAnswer}
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