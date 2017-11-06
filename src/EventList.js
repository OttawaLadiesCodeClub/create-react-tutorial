import React, { Component } from 'react'
import Event from './Event.js'

class EventList extends React.Component {
  render() {

    const rows = [];

    this.props.events_b.forEach((event_b) => {
      rows.push(
        <Event
          event_c={event_b}
          key={event_b.name}
        />
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default EventList;