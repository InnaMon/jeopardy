import React, {Component } from "react";
import './Modal.css'

class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.showModal) { 
            return null;
        }

        let answer = null;
        if(this.props.showAnswer) {
            answer = this.props.answer;
        }

      return (
        <div className="Modal">
            <div>{this.props.children}</div>
            {answer}
            <button className="closeButton" onClose={e => this.onClose(e)}>Close</button>
            <button className="answerButton" onClick={e => this.props.answerButton(e)}>Answer</button>
        </div>
      )
    }
}

export default Modal;