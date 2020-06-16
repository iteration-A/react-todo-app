function todosReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTodo];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      return state;
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
}

export default todosReducer;
