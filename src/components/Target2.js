// import React, { Component } from 'react'

// class Target2 extends Component {
//    constructor(props) {
//      super(props)
   
//      this.state = {
//         myval: true
//      }
//    }
   
//     render(){
//         return(
//            <>
//             <p>{this.props.value ?  <div>heyyy</div> :
//               <div>hello</div>}</p>
              
//             </>
           
//         )
//     }
 
// }

// export default Target2

// import React, { Component } from 'react'

// export class Target2 extends Component {

//     handleClick = () =>{
//         this.props.getToggleData()
//     }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Clickme</button>
//       </div>
//     )
//   }
// }

// export default Target2


import React, { Component } from 'react'

export class Target2 extends Component {

    // handleClick = () =>{
    //     this.props.valur
    // }

  render() {
    return (
      <div>
        {this.props.value ?  <div>hey</div> :  <div>hello</div>}
       
      </div>
    )
  }
}

export default Target2

