import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import todoDataList from "./todoData";

class MyTodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoDataList
    };
  }
  render() {
    const todoDataitems = this.state.todos.map((items) => (
      <TodoItem key={items.id} todo={items} />
    ));
    return <div className="todo-list">{todoDataitems}</div>;
  }
}

/*
export default function MyTodoList() {
  const todoDataitems = todoDataList.map((items) => (
    <TodoItem key={items.id} todo={items} />
  ));

  console.log(todoDataitems);

  return <div className="todo-list">{todoDataitems}</div>;
}

*/
export default MyTodoList;

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
