import React, {Component} from 'react'

class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

module.exports = DigitalClicker
