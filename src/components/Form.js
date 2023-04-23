import React, { Component } from "react";

export class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments:"",
      topic:"react"
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  };

  handleUserCommentsChange = event =>{
    this.setState({
        comments : event.target.value
    })
  }

  TopiChange = event =>{
    this.setState({
        topic: event.target.value
    })
  }

  handleSubmit = event =>{
    alert(`${this.state.username}  ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}
  render() {

    const {username,comments,topic} = this.state
    return (
      <form onSubmit = {this.handleSubmit} >
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
            <label>Comments</label>
            <textarea value = {comments}
             onChange={this.handleUserCommentsChange}
             ></textarea>
        </div>

        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.TopiChange}>
                <option value="react"> React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>

        <div>
         <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default form;
