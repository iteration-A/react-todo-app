import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TodoItem from "./TodoItem";
import TodoListFilterButton from "./TodoListFilterButton";
import "./TodoList.css";

export default function TodoList(props) {
  const { todos } = props;

  const [filter, setFilter] = useState("pending");

  const todoItems = todos
    .filter((todo) => todo.status === filter)
    .map((todo) => <TodoItem {...todo} />);

  return (
    <div className="TodoList">
      <div className="TodoList-title">
        <h1>Your todos</h1>
      </div>
      <div className="TodoList-filters">
        {["pending", "doing", "done"].map((f) => (
          <TodoListFilterButton
            updateFilter={setFilter}
            title={f}
            actualFilter={filter}
            key={f}
          />
        ))}
      </div>
      <div className="TodoList-add-todo">
        <Link to="/new">
          Add new todo
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </Link>
      </div>
      {todoItems}
    </div>
  );
}