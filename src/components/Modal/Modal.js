import React, {Component } from "react";
import Timer from '../Timer/Timer';
import './Modal.css'

class Modal extends Component {
    render() {
        console.log('Modal props')

        let answer = null;
        if(this.props.showAnswer) {
            answer = this.props.answer;
        }

      return (
        this.props.showModal ?
        <div className="Modal">

            <div className="header">
            <h1>{this.props.modalHeader}</h1>
            </div>

            <div className="text">
                <p><u>{this.props.question}?</u></p>
                <p>{answer}</p>
            </div>
            
            <div className="timer">
                <Timer starttimer={this.props.starttimer} timerTime={this.props.timerTime}/>
            </div>

            <div className="button">
                <button className="closeButton" onClick={this.props.hideModal}>Close</button>
                <button className="answerButton" onClick={this.props.answerButton}>Answer</button>
            </div>

        </div> : null
      )
    }
}

export default Modal;