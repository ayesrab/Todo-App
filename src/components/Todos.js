import React, { Component } from "react";
import TodoItem from "./TodoItems";
import PropTypes from "prop-types";
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markCompleted={this.props.markCompleted}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default Todos;
