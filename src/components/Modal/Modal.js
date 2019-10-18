import React, {Component } from "react";
import Timer from '../Timer/Timer';
import './Modal.css'

class Modal extends Component {

    // shouldComponentUpdate ( nextProps, nextState ) {
    //     if (this.props.timerTime !== nextProps.timerTime ) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //   }
    
    //   componentDidUpdate () {
    //     console.log('[Modal] DidUpdate');
    //   }

    render() {
        console.log('Modal props', this.props)

        let answer = null;
        if(this.props.showAnswer) {
            answer = this.props.answer;
        }

      return (
        this.props.showModal ?
        <div className="Modal">
            <h1>{this.props.modalHeader}</h1>
            <div className="text">
                <p>{this.props.question}</p>
                <p>{answer}</p>
            </div>
            
            <div className="timer">
                <Timer startTimer={this.props.startTimer} timerTime={this.props.timerTime}/>
            </div>

            <div className="button">
                {/* <button className="closeButton" onClose={e => this.onClose(e)}>Close</button> */}
                {/* <button className="closeButton" onClick={() => this.props.hideModal(this.props.id)} showModal = {this.props.showModal === this.props.id} >Close</button> */}
                <button className="closeButton" onClick={e => this.props.hideModal(e)}>Close</button>
                <button className="answerButton" onClick={e => this.props.answerButton(e)}>Answer</button>
            </div>

        </div> : null
      )
    }
}

export default Modal;