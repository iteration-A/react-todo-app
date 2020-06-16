import React, { createContext } from "react";
import todosReducer from "../reducers/todos.reducer";
import useTodos from "../hooks/useTodos";
import useCategories from "../hooks/useCategories";

export const TodosContext = createContext();
export const DispatchTodosContext = createContext();
export const CategoriesContext = createContext();

export function TodosProvider(props) {
  //updateTodo, removeTodo
  const [todos, dispatchTodo] = useTodos("todos", todosReducer);

  const [categories, addCategory] = useCategories();

  return (
    <TodosContext.Provider value={todos}>
      <DispatchTodosContext.Provider value={dispatchTodo}>
        <CategoriesContext.Provider value={{ categories, addCategory }}>
          {props.children}
        </CategoriesContext.Provider>
      </DispatchTodosContext.Provider>
    </TodosContext.Provider>
  );
}
