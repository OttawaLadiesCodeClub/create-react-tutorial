import React, { Component } from 'react';
import EventList from './EventList.js';
import Filter from './Filter.js';

class EventTable extends React.Component {
  render() {
    return (
      <div>
        <Filter/>
        <EventList
          events_b={this.props.events_a}
        />
      </div>
    );
  }
}

export default EventTable;