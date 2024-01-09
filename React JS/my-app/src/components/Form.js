import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comment:"",
         topic: "react"
      }
    }

    changeText = (event) => {
        this.setState({
            username:event.target.value
        })
    } 

    handleComments = (event)=>{
        this.setState({
            comment:event.target.value
        })
    }

    handleTopic = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()

    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>   
        <label>Usernanme</label>
        <input 
            type="text" 
            value = {this.state.username} 
            onChange={this.changeText}
        />
        </div>

        <div>
            <label>Comments</label>
            <textarea name="" id="" cols="30" rows="10" value={this.state.comment} onChange={this.handleComments}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select name="" id="" value = {this.state.topic} onChange={this.handleTopic}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form