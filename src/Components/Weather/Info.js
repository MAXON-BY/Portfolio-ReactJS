import React from 'react';

const Info = props => (
    <div className="weather__info">
        <div>
        {props.date && <p className="weather__key">Date / Time: <span className="weather__value">{props.date}</span></p>}
        {props.city && props.country && <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>}
        {props.temp && <p className="weather__key">Temperature: <span className="weather__value">{props.temp}</span></p>}
        {props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>}
        {props.description && <p className="weather__key">Descriptions: <span className="weather__value">{props.description}</span></p>}
        {props.error && <p className="weather__error">Attention: {props.error}</p>}
        </div>
        <div className="select-city">
            <span className="select-text">Or select city:</span>
            <Select />
        </div>
    </div>
);

const Select = () => (
    <div>
        <span onClick={selectCityMinsk}>Minsk BY,</span>
        <span onClick={selectCityMoscow}>Moscow RU,</span>
        <span onClick={selectCityBerlin}>Berlin DE,</span>
        <span onClick={selectCityNY}>New York US</span>
    </div>
);

function selectCityMinsk(){
    console.log('Click Minsk!');
}
function selectCityMoscow(){
    console.log('Click Moscow!')
}
function selectCityBerlin(){
    console.log('Click Berlin!')
}
function selectCityNY(){
    console.log('Click NY!')
}

export default Info