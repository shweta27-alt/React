import React, { Component } from 'react'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"vishwas"
      }
      console.log("lifecycleA constructor")
    }

    static getDerivedStateFromProps(props,state){
       console.log("lifecycleA getDerivedStateFromProps ")       
       return null;
    }

    componentDidMount(){
        console.log("component did mount")
    }
    
  render() {
    console.log("lifecycleA render")
    return (
      <div>
        LifeCycle A
      </div>
    )
  }
}

export default LifeCycleA
