import React from "react";
import ToDo from "./Todo";

export default class extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  render() {
    return (
      <div>
        <ToDo onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => (
          <div>
            <div style={{ color: "black" }} key={todo.id}>
              {todo.text}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
