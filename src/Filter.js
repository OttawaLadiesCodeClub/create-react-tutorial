import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="checkbox"
          />
          Only show events in the future
        </form>
      </div>
    );
  }
}
export default Filter;