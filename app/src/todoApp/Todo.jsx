import React from "react";
import shortid from "shortid";
import Index from "./index.jsx";

export default class Todo extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            style={{ color: "black" }}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Enter Todo Here!"
          />
          <button style={{ color: "black" }} onClick={this.handleSubmit}>
            Add Todo
          </button>
        </form>
        <br></br>
      </div>
    );
  }
}
