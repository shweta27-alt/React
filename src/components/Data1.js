//parent main div and child main button and button ke click pe parent ke div ko toggle --- 2div hey and hello
import React,{Component} from 'react'
import Data2 from './Data2'

class Data1 extends Component{
   
    constructor(props) {
      super(props)
    
      this.state = {
         myvalue: true
      }
    }
    
    getToggleData= (val) =>{
      this.setState({myvalue: !this.state.myvalue})
    }

  render(){
    return(
        <>  
       <Data2 getToggleData = {this.getToggleData} /> 
       {this.state.myvalue ? <div>Heyyyy</div>:<div>Hello</div>}  
      
        </>
      
    )
  }
}

export default Data1