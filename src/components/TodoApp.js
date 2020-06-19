import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import { TodosProvider } from "../contexts/todos.context";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <TodosProvider>
        <Route exact path="/">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="slide-left"
              unmountOnExit
            >
              <div className="TodoListRoutes">
                <TodoList />
              </div>
            </CSSTransition>
          )}
        </Route>
        <Route exact path="/new">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="slide-right"
              unmountOnExit
            >
              <div className="TodoListRoutes">{<NewTodoForm />}</div>
            </CSSTransition>
          )}
        </Route>
        <Route exact path="/edit/:todoId">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="slide-right"
              unmountOnExit
            >
              <div className="TodoListRoutes">{<NewTodoForm />}</div>
            </CSSTransition>
          )}
        </Route>
      </TodosProvider>
      <Redirect to="/" />
    </div>
  );
}
