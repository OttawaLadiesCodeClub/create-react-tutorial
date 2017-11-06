import React, { Component } from 'react';
import './App.css';
import EventTable from './EventTable.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src="http://flaticons.net/icons/Mobile%20Application/Calendar-Date-04.png" className="App-logo" alt="logo" />
            <h1 className="App-title">Upcoming engagements</h1>
        </header>
        <EventTable events_a={EVENTS} />
      </div>
    );
  }
}

const EVENTS = [
  {date: '2017-06-12', name: 'Functional vs Object Oriented Programming'},
  {date: '2017-08-14', name: 'Pushing left Talk'},
  {date: '2017-11-01', name: 'White paper club - Excluded Middle'},
  {date: '2017-11-09', name: 'React Tutorial'},
  {date: '2017-12-06', name: 'Ladies in Code in History'},
  {date: '2017-01-04', name: 'Security Leadership Talk'}
];



export default App;
