import { useReducer, useEffect } from "react";

const useTodos = (key, reducer, defaultValues = []) => {
  const [todos, dispatch] = useReducer(reducer, defaultValues, () => {
    if (window.localStorage.getItem(key) === null) return defaultValues;

    return JSON.parse(window.localStorage.getItem(key));
  });

  useEffect(() => {
    const todosString = JSON.stringify(todos);
    window.localStorage.setItem("todos", todosString);
  }, [todos]);

  return [todos, dispatch];
};

export default useTodos;
