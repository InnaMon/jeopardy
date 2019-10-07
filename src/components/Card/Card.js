import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card" onClick={e => props.handleModal()}>
            <p>{props.children}</p>
        </div>
    )
}

export default Card;