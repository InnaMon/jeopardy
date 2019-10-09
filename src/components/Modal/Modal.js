import React, {Component } from "react";
import './Modal.css'

class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.show) {
            return null;
        }
      return (
        <div className="Modal">
            <div>{this.props.children}</div>
            <button className="closeButton" onClose={e => this.onClose(e)}>Close</button>
            <button className="answerButton" onClick={this.props.answerButton}>Answer</button>
        </div>
      )
    }
}

export default Modal;