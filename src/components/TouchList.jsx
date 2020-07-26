import React from 'react'
import './TouchList.less'

const list = []
for (let i = 0; i < 10; i++) {
  list.push(`Item ${i + 1}`)
}

const lineHeight = 42
class TouchList extends React.Component {
  constructor(props) {
    super(props)
    this.state.list = list
  }

  state = {
    dragging: false,
    draggingIndex: -1,
    startPageY: 0,
    offsetPageY: 0
  }

  handleMouseDown = (evt, index) => {
    this.setState({
      dragging: true,
      startPageY: evt.pageY,
      currentPageY: evt.pageY,
      draggingIndex: index
    })
  }

  move = (arr, startIndex, toIndex) => {
    arr = arr.slice(0)
    arr.splice(toIndex, 0, arr.splice(startIndex, 1)[0])
    return arr
  }

  handleMouseMove = evt => {
    let offset = evt.pageY - this.state.startPageY
    const draggingIndex = this.state.draggingIndex
    if (offset > lineHeight && draggingIndex < this.state.list.length - 1) {
      // mouse down
      offset -= lineHeight
      this.setState({
        list: this.move(this.state.list, draggingIndex, draggingIndex + 1),
        draggingIndex: draggingIndex + 1,
        startPageY: this.state.startPageY + lineHeight
      })
    } else if (offset < -lineHeight && draggingIndex > 0) {
      // mouse up
      offset += lineHeight
      this.setState({
        list: this.move(this.state.list, draggingIndex, draggingIndex - 1),
        draggingIndex: draggingIndex - 1,
        startPageY: this.state.startPageY - lineHeight
      })
    }
    this.setState({
      offsetPageY: offset
    })
  }

  handleMouseUp = () => {
    this.setState({
      dragging: false,
      startPageY: 0,
      draggingIndex: -1
    })
  }

  getDraggingStyle = index => {
    if (index !== this.state.draggingIndex) return {}
    return {
      backgroundColor: '#eee',
      transform: `translate(10px, ${this.state.offsetPageY}px)`,
      opacity: 0.5
    }
  }

  render() {
    // const { list, dragging } = this.state
    return (
      <div className="dnd-sample">
        <ul>
          {this.state.list.map((text, i) => (
            <li
              key={text}
              onMouseDown={evt => this.handleMouseDown(evt, i)}
              style={this.getDraggingStyle(i)}
            >
              {text}
            </li>
          ))}
        </ul>
        {this.state.dragging && (
          <div>
            <div
              className="dnd-sample-mask"
              onMouseMove={this.handleMouseMove}
              onMouseUp={this.handleMouseUp}
            />
          </div>
        )}
      </div>
    )
  }
}

export default TouchList
