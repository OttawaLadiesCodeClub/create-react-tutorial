import React, { Component } from 'react';

class Event extends React.Component {
  render() {

    const event_d = this.props.event_c;

    return (
        <tr>
          <td>{event_d.name}</td>
          <td>{event_d.date}</td>
        </tr>
    );
  }
}

export default Event;