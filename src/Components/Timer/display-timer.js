import React, { Component } from 'react';

class TimerDisplay extends Component{
    render(){
        return <p>{this.props.timeLeft}</p>
    }
}
export default TimerDisplay;
