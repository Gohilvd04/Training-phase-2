import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }
    // this.handleEvent = this.handleEvent.bind();
  }

  handleEvent = () => {
    this.setState({
        message:'Bye'
    })
  }
  
    render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick = {this.handleEvent}>Click</button>
      </div>
    )
  }
}

export default EventBind