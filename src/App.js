import React, { Component } from 'react';
import Timer from './Components/Timer/timer.js'
import TestCode from './Components/Test/test.js'
import GitUser from './Components/Git/GitUser.js'
import Weather from './Components/Weather/Weather.js'
import ToDo from './Components/ToDo/ToDo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <GitUser />
        <Weather />
        <ToDo />
        <div><TestCode /></div>
      </div>
    );
  }
}

export default App;
