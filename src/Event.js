import React, { Component } from 'react'

class Event extends Component {
  render() {

    const event = this.props.event;

    return (
      <tr>
        <td>{event.name}</td>
        <td>{event.date}</td>
      </tr>
    );
  }
}

export default Event;