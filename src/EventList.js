import React, { Component } from 'react'
import Event from './Event.js'

class EventList extends Component {
  render() {
    const showUpcoming = this.props.showUpcoming;

    const rows = [];

    this.props.events.forEach((event) => {
      if (showUpcoming && !event.upcoming) {
        return;
      }
      rows.push(
        <Event
          event={event}
          key={event.name}
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