import React, { Component } from 'react'
//ref is used to point element
export class Refs extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
        <input type="text" ref= {this.inputRef} ></input>
      </div>
    )
  }
}

export default Refs
