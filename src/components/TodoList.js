import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TodoItem from "./TodoItem";
import TodoListFilterButton from "./TodoListFilterButton";
import { TodosContext, DispatchTodosContext } from "../contexts/todos.context";
import "./TodoList.css";

export default function TodoList(props) {
  const todos = useContext(TodosContext);
  const dispatchTodos = useContext(DispatchTodosContext);
  const removeAllTodos = () => dispatchTodos({ type: "REMOVE_ALL" });

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

      <div className="TodoList-add-todo-wrapper">
        <Link className="TodoList-add-todo TodoList-btn" to="/new">
          Add new todo
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </Link>
      </div>
      {todoItems}
      {todos.length > 0 && (
        <button
          onClick={removeAllTodos}
          className=" TodoList-btn TodoList-remove-todos"
        >
          Remove all todos
        </button>
      )}
    </div>
  );
}
