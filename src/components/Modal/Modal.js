import React, {Component } from "react";
import Timer from '../Timer/Timer';
import './Modal.css'

class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    startTimer = () => {
        this.timer = setInterval(() => {
          let newTime = this.state.timerTime - 1;
          if (this.state.showModal && this.state.timerTime > 0) {
            this.setState({
              timerTime: newTime
            })
          } else {
            clearInterval(this.timer);
          }
        }, 2000)
      }

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
            <div className="text">{this.props.children}
            {answer}
            </div>
            {/* <Timer className="timer" startTimer={this.props.startTimer} timerTime={this.props.timerTime}/> */}
            <div className="button">
                <button className="closeButton" onClose={e => this.onClose(e)}>Close</button>
                <button className="answerButton" onClick={e => this.props.answerButton(e)}>Answer</button>
            </div>
        </div>
      )
    }
}

export default Modal;