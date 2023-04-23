import React, { Component } from 'react'

export class Childtwo extends Component {
    // componentDidMount(){
    //     console.log(this.props.value)
    // }

    shouldComponentUpdate(nextProps,nextState){
    //   console.log("nextprops",nextProps.seconddata)
    //   console.log("sec",this.props.seconddata)
      if(this.props.seconddata == nextProps.seconddata){
         return false
      }
      return true;
    }
  render() {
    console.log("childtwo",this.props.seconddata)
    return (
      <div>
        {this.props.seconddata}
      </div>
    )
  }
}

export default Childtwo
