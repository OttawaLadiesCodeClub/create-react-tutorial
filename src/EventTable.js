import React, { Component } from 'react'
import EventList from './EventList.js'
import Event from './Event.js'
import Filter from './Filter.js'

class EventTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inFuture: false
    };

    this.handleFutureFilter = this.handleFutureFilter.bind(this);
  }

  handleFutureFilter(inFuture) {
    this.setState({
      inFuture: inFuture
    })
  }

  render() {
    return (
      <div>
        <Filter
          inFuture={this.state.inFuture}
          onFutureFilter={this.handleFutureFilter}
        />
        <EventList
          events={this.props.events}
          inFuture={this.state.inFuture}
        />
      </div>
    );
  }
}

export default EventTable;