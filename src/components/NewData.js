import React, { Component } from "react";

class NewData extends Component {
  clickButton = () => {
    this.props.clickHandler(!this.props.value)
  };
  render() {
    return (
      <div>
        testtttt
        {/* <p>{this.props.value}</p>

          { this.props.value ? <div>true</div> : null}
          { this.props.value ? null : <div>false</div>}
            <div>false</div> */}
        <button onClick={this.clickButton}>Click</button>
      </div>
    );
  }
}

export default NewData;
