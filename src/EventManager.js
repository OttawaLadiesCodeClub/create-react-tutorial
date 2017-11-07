import React, { Component } from 'react'
import EventList from './EventList.js'
import Filter from './Filter.js'

class EventManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpcoming: false
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(showUpcoming) {
    this.setState({
      showUpcoming: showUpcoming
    })
  }

  render() {
    return (
      <div>
        <Filter
          showUpcoming={this.state.showUpcoming}
          onFilter={this.handleFilter}
        />
        <EventList
          events={this.props.events}
          showUpcoming={this.state.showUpcoming}
        />
      </div>
    );
  }
}

export default EventManager;