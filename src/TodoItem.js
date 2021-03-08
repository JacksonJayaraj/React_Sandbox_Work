import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />

      <p> {props.todo.text}</p>
      <p> {props.todo.completed} </p>
    </div>
  );
}

export default TodoItem;

//<div className="todo-item">

/*
    <div className="todo-item">
      <input type="checkbox" />
      <p> {props.todo.text}</p>
      <h1> {props.todo.completed} </h1>
    </div>

*/
