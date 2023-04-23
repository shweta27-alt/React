import React, { Component } from 'react'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"vishwas"
      }
      console.log("lifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
       console.log("lifecycleB getDerivedStateFromProps ")       
       return null;
    }

    componentDidMount(){
        console.log("component did mount")
    }

    shouldComponentUpdate(){
        console.log("Lifecycle B shouldComponntUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevprops,prevState){
        console.log("lifecycle getSnapshortB3eforeUpdate")
    }
    
    componentDidUpdate(){
        console.log("component did Update")
    }


  render() {
    console.log("lifecycleA render")
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleA
