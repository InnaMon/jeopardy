import React, {Component } from "react";
import './Modal.css'

class Modal extends Component {
    // UNSAFE_shouldComponentUpdate ( nextProps, nextState ) {
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }

    componentDidUpdate () {
        console.log('[Modal] DidUpdate');
    }

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