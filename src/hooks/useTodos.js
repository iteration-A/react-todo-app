import { useState } from "react";

const useTodos = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => setTodos([...todos, newTodo]);
  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  const updateTodo = (todoId, newTodo) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos([...newTodos, newTodo]);
  };
  const removeAllTodos = () => setTodos([]);

  return [todos, addTodo, updateTodo, removeTodo, removeAllTodos];
};

export default useTodos;
