import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        // let styles = null;

        // if (!this.props.answered) {
        //     styles = <>className="notAnsweredCard"</>;
        // }

        return (
            <div className={"card " + (!this.props.answered ? "notAnsweredCard" : "answeredCard")} onClick={e => this.props.handleModal()}>
            <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Card;