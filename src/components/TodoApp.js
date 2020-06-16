import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import { TodosProvider } from "../contexts/todos.context";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <Switch>
        <TodosProvider>
          <Route exact path="/" render={() => <TodoList />} />
          <Route
            exact
            path="/new"
            render={(routeProps) => <NewTodoForm {...routeProps} />}
          />
        </TodosProvider>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
