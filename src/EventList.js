import React, { Component } from 'react'
import Event from './Event.js'

class EventList extends React.Component {
  render() {
    const inFuture = this.props.inFuture;

    const rows = [];

    this.props.events.forEach((event) => {
      if (inFuture && !event.stocked) {
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default EventList;