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
      <div>
        <form>
            <input
              type="checkbox"
              checked={this.props.inFuture}
              onChange={this.handleFutureFilter}
            />
            {' '}
            Only show events in the future
        </form>
      </div>
    );
  }
}

export default Filter;