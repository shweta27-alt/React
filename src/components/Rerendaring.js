import React, { Component } from 'react'
import Childone from './Childone'
import Childtwo from './Childtwo'

export class Rerendaring extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        data : "heyyy"
     }
   }
   

   handleclick = () =>{
    this.setState({data:"heyyy"})
   }
    
  render() {
    return (
      <div>
        <Childone value={this.state.data}/>
        <Childtwo  seconddata = {this.state.data}/>
        <button onClick = {this.handleclick}>Submit</button>
      </div>
    )
  }
}

export default Rerendaring
