import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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

const routes = [
  {
    path: "/",
    name: "Home",
    component: TodoList,
  },
  {
    path: "/new",
    name: "New todo form",
    Component: NewTodoForm,
  },
  {
    path: "/edit",
    name: "Edit todo form",
    Component: NewTodoForm,
  },
];

{
  /* <TodosProvider>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Redirect to="/" />
      </TodosProvider> */
}
