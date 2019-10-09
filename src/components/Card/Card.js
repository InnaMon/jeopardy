import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div 
            className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} 
            onClick={e => this.props.handleModal()}>
            <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Card; 