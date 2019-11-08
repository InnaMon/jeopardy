import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.timerTime !== this.props.timerTime;  
    }
    
    componentDidUpdate () {
        console.log('[Timer] DidUpdate');
    }

    render() {
        return (
            <div className="Timer" starttimer={this.props.starttimer()}>{this.props.timerTime} seconds</div>
        )
    }
}

// const Timer = (props) => {
//     return (
//         <div className="Timer" startTimer={props.startTimer()}>{props.timerTime} seconds</div>
//     )
// }

export default Timer; 