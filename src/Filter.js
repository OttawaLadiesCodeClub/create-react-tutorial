import React, { Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onFilter(e.target.checked);
  }

  render() {
    return (
      <div>
        <form>
            <input
              type="checkbox"
              checked={this.props.showUpcoming}
              onClick={this.handleClick}
            />
            {' '}
            Only show events in the future
        </form>
      </div>
    );
  }
}

export default Filter;