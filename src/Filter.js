import React, { Component } from 'react'

class Filter extends React.Component {
  constructor(props) {

    super(props);

    this.handleFutureFilter = this.handleFutureFilter.bind(this);
  }

  handleFutureFilter(e) {

    this.props.onFutureFilter(e.target.checked);
  }

  render() {
    return (
      <form>
        <p>
          <input
            type="checkbox"
            checked={this.props.inFuture}
            onChange={this.handleFutureFilter}
          />
          {' '}
          Only show events in the future
        </p>
      </form>
    );
  }
}

export default Filter;