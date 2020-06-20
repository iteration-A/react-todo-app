import React, { createContext } from "react";
import todosReducer from "../reducers/todos.reducer";
import useTodos from "../hooks/useTodos";

export const TodosContext = createContext();
export const DispatchTodosContext = createContext();

export function TodosProvider(props) {
  //updateTodo, removeTodo
  const [todos, dispatchTodo] = useTodos("todos", todosReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchTodosContext.Provider value={dispatchTodo}>
        {props.children}
      </DispatchTodosContext.Provider>
    </TodosContext.Provider>
  );
}
