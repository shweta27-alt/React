import React,{Component} from 'react'

class Data2 extends Component{
   
    handleClick = () =>{
        this.props.getToggleData();
    }

  render(){
    return(
        <> 
        <button onClick={this.handleClick} >Click me</button>
        </>
    
    )
  }
}

export default Data2