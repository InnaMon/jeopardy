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
            <button onClose={e => this.onClose(e)}>Close</button>
        </div>
      )
    }
}

export default Modal;