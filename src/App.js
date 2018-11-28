import React, { Component } from 'react';
import Timer from './Components/Timer/timer.js'
import TestCode from './Components/Test/test.js'
import GitUser from './Components/Git/GitUser.js'
import Weather from './Components/Weather/Weather.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <GitUser />
        <Weather />
        <div><TestCode /></div>
      </div>
    );
  }
}

export default App;
