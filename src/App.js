import React, { Component } from 'react';
import './App.css';

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
              <img src="http://flaticons.net/icons/Mobile%20Application/Calendar-Date-04.png" class="App-logo" alt="logo" />
              <h1 className="App-title">Upcoming engagements</h1>
          </header>
          <p className="App-intro">
            <div>
                <form>
                  <input type="text" placeholder="Search..."/>
                  <p><input type="checkbox" value="on"/> Only show future events</p>
                </form>
                <table>
                  <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>Functional vs Object Oriented Programming</td>
                        <td>2017-06-12</td>
                      </tr>
                      <tr>
                        <td>Pushing left Talk</td>
                        <td>2017-07-13</td>
                      </tr>
                      <tr>
                        <td>Regex Talk</td>
                        <td>2017-08-14</td>
                      </tr>
                      <tr>
                        <td>White paper club - Excluded Middle</td>
                        <td>2017-11-01</td>
                      </tr>
                      <tr>
                        <td>React Tutorial</td>
                        <td>2017-11-09</td>
                      </tr>
                      <tr>
                        <td>Ladies in Code in History</td>
                        <td>2017-12-06</td>
                      </tr>
                      <tr>
                        <td>Security Leadership Talk</td>
                        <td>2017-01-04</td>
                      </tr>
                  </tbody>
                </table>
            </div>
          </p>
        </div>
    );
  }
}

export default App;
