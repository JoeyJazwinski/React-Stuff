import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  handleClick = (e) => {};

  render() {
    return (
      <div>
        <button
          style={{ color: "black" }}
          onClick={(e) => {
            this.setState({ value: this.state.value + 1 });
          }}
        >
          Add 1
        </button>
        <div style={{ color: "black" }}>Number: {this.state.value}</div>
      </div>
    );
  }
}
