import React, { Component } from 'react';
import Button from './btn-timer.js'
import TimerDisplay from './display-timer.js'
import './timer.css';

class Timer extends Component {
    constructor(props){
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: 0, // начальное значение
            timer: null
        }
    }

    //let hour = Math.floor(timeLeft / 3600);
    //let min = Math.floor(timeLeft / 60);
    //let sec = timeLeft % 60;
    //console.log(hour + " : " + min + " : " + sec);

    startTimer(timeLeft){
        clearInterval(this.state.timer);
        console.log('start');

        let timer = setInterval(()=>{
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0){
                clearInterval(timer)
            }
            this.setState({
                timeLeft: timeLeft
            })

        }, 1000);
        this.setState({timer: timer, timeLeft: timeLeft})
    }

    render() {
        return (
            <div className="App-header timer bg-timer">
                <div className="timerWrap">
                    <div className="timerName">
                        <p><span>Online</span>Timer</p>
                    </div>
                    <div className="timerConfig">
                        <div className="timerConfigBtn">
                            <button className="greenBtn">Play</button>

                            <Button time="500" startTimer={this.startTimer}/>
                            <Button time="10" startTimer={this.startTimer}/>
                            <Button time="15" startTimer={this.startTimer}/>
                            <Button time="20" startTimer={this.startTimer}/>
                            <Button time="30" startTimer={this.startTimer}/>
                            <Button time="45" startTimer={this.startTimer}/>
                            <Button time="60" startTimer={this.startTimer}/>

                            <button className="orangeBtn">Another Time</button>
                        </div>
                        <div className="timerConfigAnotherTime hidden">
                            <form>
                                <span>Add:</span>
                                <input type="number" id="timer-hours"/>
                                <span>Hours</span>
                                <input type="number" id="timer-minutes"/>
                                <span>Minutes</span>
                                <input type="number" id="timer-seconds"/>
                                <span>Seconds</span>
                                <button>Add Time</button>
                            </form>
                        </div>
                        <div className="timerWindow">
                            <TimerDisplay timeLeft={this.state.timeLeft}/>
                            <div className="timerWindowButtons"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Timer;
