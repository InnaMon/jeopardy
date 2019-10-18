import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    render() {
        console.log('card comp props', this.props);
        return (
            <div 
            className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
            // id={this.props.id}
            onClick={this.props.showModalHandler}
            // showModal={this.props.showModal}
            >
            <p>{this.props.title}</p>
            <Modal {...this.props}
            //   showModal={this.props.showModal}
            //   header={this.props.modalHeader}
            //   question={this.props.question} 
            //   answer={this.props.answer}
            //   id={this.props.id}
            //   showModal={this.props.showModal} 
            //   hideModal={this.props.hideModal}
            //   answered={this.props.answered}
            //   answerButton={this.props.answerButton}
            //   showAnswer={this.props.showAnswer}
            //   timerTime={this.props.timerTime}
            //   startTimer={this.props.startTimer}
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