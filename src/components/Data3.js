import React, { Component } from 'react'
import axios from 'axios'

export class Data3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    
    shouldComponentUpdate(nextprops,nextstate){  
        if(this.state.data == 4 ){
            return false
        }
       return true;
    }

    componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/todos")
       .then((val)=>{
        this.setState({data:val.data})
       }).catch((error)=>{
        console.log(error)
       })
    }

    componentDidUpdate(prevprops, prevstate){
        console.log(this.state.data)
        console.log(prevstate.data)
    }

    handleClick = () =>{
        this.setState({data:this.state.data + 1})
    }

  render() {
    let value = this.state.data.map((val)=>
      <div>{val.title}</div>
    )
    return (
      <div>
        
        {value}
        <p>{this.state.data}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Data3
