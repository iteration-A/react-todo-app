import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import useTodos from "../hooks/useTodos";
import useCategories from "../hooks/useCategories";
import checkLocalStorage from "./helpers/seedInfo";
import "./TodoApp.css";

export default function TodoApp() {
  //updateTodo, removeTodo
  const [todos, addTodo, removeAllTodos] = useTodos(
    checkLocalStorage()
  );

  const [categories, addCategory] = useCategories();

  // Synchronize to localStorage after a change
  useEffect(() => {
    const todosString = JSON.stringify(todos);
    window.localStorage.setItem("todos", todosString);
  }, [todos]);

  return (
    <div className="TodoApp">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <TodoList todos={todos} clearTodos={removeAllTodos} />}
        />
        <Route
          exact
          path="/new"
          render={(routeProps) => (
            <NewTodoForm
              {...routeProps}
              categories={categories}
              addCategory={addCategory}
              addTodo={addTodo}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
