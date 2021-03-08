import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import todoDataList from "./todoData";

//const styles = { color: "red", fontSize: 30 };

export default function MyTodoList() {
  const todoDataitems = todoDataList.map((items) => (
    <TodoItem key={items.id} todo={items} />
  ));

  console.log(todoDataitems);

  return <div className="todo-list">{todoDataitems}</div>;
}

//export default MyTodoList;

//<input type="checkbox" id="todo2" name="todo2" value="Drink Coffee" />
//     <input type="checkbox" id="todo3" name="todo3" value="Buy Coffee" />

/*
<div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>

*/
