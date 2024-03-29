import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Dk'
      }

      this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComp handleParent = {this.greetParent}/>
      </div>
    )
  }
}
