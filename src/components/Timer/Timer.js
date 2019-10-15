import React from 'react';
import './Timer.css';

const Timer = (props) => {
    return (
        <div className="Timer" startTimer={() => props.startTimer()}>{props.timerTime} seconds</div>
    )
}

export default Timer; 