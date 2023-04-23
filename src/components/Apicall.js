import React,{Component} from 'react'
import axios from 'axios'

class Apicall extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         data: []
      }
    }
    

     componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/todos")
       .then((val)=>{
         this.setState({data:val.data})
        //  console.log(val.data)
       }).catch((error)=>{
         console.log(error)
       })
    }

    render(){
        let value =  this.state.data.map((val)=> <div>{val.title}</div>)
        console.log(value)
        return(
            <div>{value}</div>
        )
    }
}

export default Apicall;