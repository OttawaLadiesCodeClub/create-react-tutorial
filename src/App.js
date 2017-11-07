import React, { Component } from 'react';
import './App.css';
import EventManager from './EventManager.js'

class App extends Component {
  render() {
    const EVENTS = [
      {date: '2017-06-12', upcoming: false, name: 'Functional vs Object Oriented Programming'},
      {date: '2017-08-14', upcoming: false, name: 'Pushing left Talk'},
      {date: '2017-11-01', upcoming: false, name: 'White paper club - Excluded Middle'},
      {date: '2017-11-09', upcoming: false, name: 'React Tutorial'},
      {date: '2017-12-06', upcoming: true, name: 'Ladies in Code in History'},
      {date: '2017-01-04', upcoming: true, name: 'Security Leadership Talk'}
    ];
    return (
      <div className="App">
        <header className="App-header">
            <img src="http://flaticons.net/icons/Mobile%20Application/Calendar-Date-04.png" className="App-logo" alt="logo" />
            <h1 className="App-title">Upcoming engagements</h1>
        </header>
        <EventManager events={EVENTS} />
      </div>
    );
  }
}

export default App;
