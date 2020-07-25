import React, { Component } from 'react'

class Keys extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [11, 22, 33]
    }
  }

  addItem = () => {
    this.setState({
      list: [...this.state.list, 44, 55]
    })
  }

  render () {
    return (
      <>
        <button onClick={this.addItem}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default Keys
