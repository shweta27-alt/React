import React, { Component, PureComponent } from 'react'

export class Childone extends PureComponent {

    // componentDidMount(){
    //     console.log(this.props.value)
    // }
  render() {

    
    console.log("childone",this.props.value)
    return (
      <div>
       {this.props.value}
        
      </div>
    )
  }
}

export default Childone
