import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TodoList from "./TodoList";
import useTodos from "../hooks/useTodos";
import checkLocalStorage from "./helpers/seedInfo";
import "./TodoApp.css";

export default function TodoApp() {
  const [todos, addTodo, updateTodo, removeTodo] = useTodos(
    checkLocalStorage()
  );
  // Synchronize to localStorage after a change
  useEffect(() => {
    const todosString = JSON.stringify(todos);
    window.localStorage.setItem("todos", todosString);
  }, [todos]);

  return (
    <div className="TodoApp">
      <Switch>
        <Route exact path="/" render={() => <TodoList todos={todos} />} />
        <Route exact path="/new" render={() => <h1>New todo page</h1>} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
