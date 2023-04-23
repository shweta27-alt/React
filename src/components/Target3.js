import axios from 'axios'
import React, { Component } from 'react'

class Target3 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((val)=>{
          this.setState({data:val.data})
        }).catch((error)=>{
            console.log(error)
        })
    }

  render() {
    let value = this.state.data.map((val)=> <div>{val.title}</div> )
    return (
      <div>
        {value}
      </div>
    )
  }
}

export default Target3
