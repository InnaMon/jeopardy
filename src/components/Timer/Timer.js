import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.timerTime !== this.props.timerTime;  
    }
    
    componentDidUpdate () {
        console.log('[Card] DidUpdate');
    }

    render() {
        return (
            <div className="Timer" startTimer={this.props.startTimer()}>{this.props.timerTime} seconds</div>
        )
    }
}

// const Timer = (props) => {
//     return (
//         <div className="Timer" startTimer={props.startTimer()}>{props.timerTime} seconds</div>
//     )
// }

export default Timer; 