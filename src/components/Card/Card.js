import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    // shouldComponentUpdate ( nextProps, nextState ) {
    //     return nextProps.timerTime === this.props.timerTime;  
    //   }
    
    componentDidUpdate () {
    console.log('[Card] DidUpdate');
    }

    render() {
        console.log('card comp props', this.props);
        return (
            <div 
            className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
            onClick={this.props.showModalHandler}
            >
            <p>{this.props.title}</p>
            <Modal {...this.props}>
            </Modal>
            </div>
        )
    }
}

export default Card; 