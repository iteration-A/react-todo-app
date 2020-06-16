function todosReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTodo];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.todoId);
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.todoId ? action.newTodo : todo
      );
    case "UPDATE_DONE":
      return state.map((todo) =>
        todo.id === action.todoId ? { ...todo, status: "Done" } : todo
      );
    case "UPDATE_DOING":
      return state.map((todo) =>
        todo.id === action.todoId ? { ...todo, status: "Doing" } : todo
      );
    case "UPDATE_PENDING":
      return state.map((todo) =>
        todo.id === action.todoId ? { ...todo, status: "Pending" } : todo
      );
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
}

export default todosReducer;
