import React, {Component } from "react";
import Timer from '../Timer/Timer';
import './Modal.css'

class Modal extends Component {
    // onClose = e => {
    //     this.props.hideModal && this.props.hideModal();
    // };

    // onClose = key => {
    //     this.props.showModal && this.props.hideModal(key);
    // };

    render() {
        // if(!this.props.showModal) { 
        //     return null;
        // }
        console.log('this.props.showModal', this.props.showModal)

        let answer = null;
        if(this.props.showAnswer) {
            answer = this.props.answer;
        }

      return (
        this.props.showModal ?
        <div className="Modal">

            <div className="text">
                <h1>{this.props.header}</h1>
                <p>{this.props.question}</p>
                <p>{answer}</p>
            </div>

            <div className="timer">
                <Timer startTimer={this.props.startTimer} timerTime={this.props.timerTime}/>
            </div>

            <div className="button">
                {/* <button className="closeButton" onClose={e => this.onClose(e)}>Close</button> */}
                {/* <button className="closeButton" onClick={() => this.props.hideModal(this.props.id)} showModal = {this.props.showModal === this.props.id} >Close</button> */}
                <button className="closeButton" onClick={() => this.props.hideModal(this.props.id)} >Close</button>
                <button className="answerButton" onClick={e => this.props.answerButton(e)}>Answer</button>
            </div>

        </div> : null
      )
    }
}

export default Modal;