import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    //conditional operator

    //4th approach

    return this.state.isLoggedIn && <div> welcome shweta</div>

   // 3rd approach
    // return(
    //     this.state.isLoggedIn ?
    //      <div>Welcome shweta</div> : 
    //      <div>Welcome guest</div>
    // )


    //2nd method
    // let message ;
    //  if (this.state.isLoggedIn) {
    //   message =  <div>Welcome shweta</div>;
    // } else {
    //  message = <div>welcome guest</div>;
    // }
    // return <div>{message}</div>

    //1st method
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome shweta</div>;
    // } else {
    //   return <div>welcome guest</div>;
    // }
    // return (
    //   <div>
    //    <div>Welcome shweta</div>
    //    <div>Welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
