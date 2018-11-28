import React, {Component} from "react"
import MoshCountrs from  './MoshCounters.js'
import "./test.css"

class TestCode extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            isLight : true
        };

    }

    onDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        });
        if(this.state.counter === -6){
            MinMessage()
        }
    };
    onIncrease = () =>{
        this.setState({
            counter: this.state.counter + 1
        });
        if(this.state.counter === 6){
            MaxMessage()
        }
    };


    useAlertWindow = () => {
        alert('Вы нажали кнопку Alert')
    };
    useConfirmWindow = () => {
        prompt('Введите любой символ');
    };
    useConsole = () => {
        console.log('Нажали на кнопку Button console', this)
    };

    turnOnLight = () => {
        this.setState({isLight : true});
    };
    turnOffLight = () => {
        this.setState({isLight : false});
    };



    render(){
        const isLight = this.state.isLight;
        let btnLight = null;

        if(isLight) {
            btnLight = <SnuffOutButton onClick={this.turnOffLight} />;
            //btnLight = <button onClick={this.turnOffLight}>Выключить</button> - можно установить так и не выпендриваться с props
        }else{
            btnLight = <SetFireButton onClick={this.turnOnLight} />;
            //btnLight = <button onClick={this.turnOnLight}>Включить</button> - можно установить так и не выпендриваться с props
        }

        return(
            <div className="App-header testSection bg-test">
                <h2>Test Code is here!</h2>

                <div className="buttonsWrap">
                    <button onClick={this.useAlertWindow}>Button (Alert)</button>
                    <button onClick={this.useConfirmWindow}>Button (Confirm)</button>
                    <button onClick={this.useConsole}>Button (Console)</button>
                </div>
                <hr/>
                <div className="countWrap">
                    <button onClick={this.onDecrease}>-</button>
                    <span>{this.state.counter}</span>
                    <button onClick={this.onIncrease}>+</button>
                </div>
                <hr/>
                <div className="fireWrap">
                    <IndicatorSveta isLight={isLight} />
                    {btnLight}
                </div>
                <hr/>
                <div>
                    <Hello name='Max' />
                    <Hello name='Jane' />
                    <Hello name='Vlad' />
                    <Hello name='Miron' />
                </div>
                <div>
                    <span style={{color: "red"}}>Attention!</span>
                    {errors.length > 0 && <p>You have <b>{errors.length}</b> errors.</p>}
                </div>

                <div className="listWrap hidden">
                    <ul>
                        <li>Link#</li>
                        <li>Link#</li>
                        <li>Link#</li>
                    </ul>
                </div>

                <MoshCountrs />
            </div>
        )
    }
}

// Счётчик + -
function MinMessage() {
    return alert('Это минимум!');
}
function MaxMessage() {
    return alert('Это максимум!');
}

// Индикатор включить/выключить свет с заменой текста
// Исходник https://codepen.io/stzidane/pen/BZawrJ?editors=0010
function IndicatorSveta(props){
    const isLight = props.isLight;
    if(isLight){return <SetFireMessage />}
    return <SnuffOutMessage />
}
function SetFireMessage(){
    return <p>Свет горит. Выключай немедля!</p>
}
function SnuffOutMessage(){
    return <p>Темно уже. Врубай рубильник!</p>
}
function SetFireButton(props){
    return(<button onClick={props.onClick}>Включить</button>)
}
function SnuffOutButton(props){
    return(<button onClick={props.onClick}>Выключить</button>)
}

// Attention
const errors = [
    'Failed to load resource: net::ERR_INSECURE_RESPONSE',
    'TypeError: e is undefined',
    'Uncaught ReferenceError: calculate is not defined'
];

//Hello
function Hello(props){
    return <p>Hello, {props.name}</p>
}

export default TestCode
