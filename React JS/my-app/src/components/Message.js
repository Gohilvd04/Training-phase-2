import React, { Component } from 'react'

export default class Message extends Component {
    constructor() {
      super()

      this.state = {
         message:'Welcome Vishal'
      }
    }

    changeMessage() {
      this.setState({
        message:'Thank you for the Visit'
      })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Visit</button>
      </div>
    )
  }
}
