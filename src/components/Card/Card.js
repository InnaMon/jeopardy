import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.children}</p>
        </div>
    )
}

export default Card;