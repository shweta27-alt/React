//parent main div and child main button and on click of button you have to trigger button and div should be toggle
// import React,{Component} from 'react'
// import Target2 from './Target2'

// class Target1 extends Component{
//      constructor(props) {
//        super(props)

//        this.state = {
//           count : true
//        }
//      }

//     handleClick = () =>{
//         this.setState({count: !this.state.count})
//     }

//     render(){
//         return(
//             <>
//             <Target2 clickHandler = {this.clickHandler} value= {this.state.count}/>
//            <button onClick={this.handleClick}>Click me</button>
//              </>
//         )
//     }
// }

// export default Target1

// import React, { Component } from "react";
// import Target2 from "./Target2";

// export class Target1 extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          myvalue: true
//       }
//     }

//     getToggleData = () =>{
//         this.setState({myvalue : !this.state.myvalue})
//     }
    

//   render() {
//     return (
//       <>
//       <Target2 getToggleData = {this.getToggleData}/>
//    {this.state.myvalue ?  <div>hey</div> :  <div>hello</div>}
//       </>
//     );
//   }
// }

// export default Target1;


import React, { Component } from 'react'
import Target2 from './Target2'

export class Target1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: true
      }
    }
    

    handleClick = () =>{
       this.setState({count: !this.state.count})
    }

  render() {
    return (
      <div>
        <Target2 handleClick= {this.handleClick} value={this.state.count}/>
        <button onClick={this.handleClick}>Clickme</button>
      </div>
    )
  }
}

export default Target1
