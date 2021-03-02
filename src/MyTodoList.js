import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

//const styles = { color: "red", fontSize: 30 };

export default function MyTodoList() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

//export default MyTodoList;

//<input type="checkbox" id="todo2" name="todo2" value="Drink Coffee" />
//     <input type="checkbox" id="todo3" name="todo3" value="Buy Coffee" />
