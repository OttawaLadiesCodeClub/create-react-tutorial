import React, { Component } from 'react';
import EventList from './EventList.js';
import Filter from './Filter.js';

class EventManager extends Component {
  render() {
    return (
      <div>
        <Filter/>
        <EventList
          events={this.props.events}
        />
      </div>
    );
  }
}

export default EventManager;