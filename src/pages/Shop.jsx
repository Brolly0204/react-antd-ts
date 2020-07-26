import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

export default class Shop extends Component {
  state = {
    name: ''
  }

  onChangeHandle = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Prompt when={!!this.state.name} message="确认要离开？" />
        <input type="text" value={this.state.name} onChange={this.onChangeHandle} />
      </div>
    )
  }
}
