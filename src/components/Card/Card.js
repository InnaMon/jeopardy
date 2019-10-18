import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    render() {
        console.log('Card comp props', this.props);
        return (
            <div 
            className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
            // showModal={this.props.showModal === this.props.id}
            onClick={() => this.props.showModalHandler(this.props.id)}>
            <p>{this.props.title}</p>
            <Modal 
              id={this.props.id}
              showModal={this.props.showModal} 
              hideModal={this.props.hideModal}
              header={this.props.header}
              question={this.props.question} 
              answer={this.props.answer}
            //   showModal={this.props.showModal === this.props.id} 
            //   hideModal={() => this.props.hideModal(this.props.id)}
            //   onClose={this.props.onClose}
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