import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import uuid from "uuid/dist/v4";
import useInputForm from "../hooks/useInputForm";
import { TodosContext } from "../contexts/todos.context";
import { DispatchTodosContext } from "../contexts/todos.context";
import "./NewTodoForm.css";

function NewTodoForm(props) {
  const { history, match } = props;

  const todo = useContext(TodosContext).filter((todo) => {
    try {
      return todo.id === match.params.todoId;
    } catch {
      return null;
    }
  })[0];

  const dispatchTodos = useContext(DispatchTodosContext);

  const [todoName, updateTodoName, todoNameWordsLeft] = useInputForm(
    todo ? todo.name : "",
    50
  );
  const [todoInfo, updateTodoInfo, todoInfoWordsLeft] = useInputForm(
    todo ? todo.info : "",
    140
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      name: todoName,
      info: todoInfo,
      status: "Pending",
    };

    // If is editing
    if (todo)
      dispatchTodos({
        type: "UPDATE",
        todoId: todo.id,
        newTodo: { ...newTodo, id: todo.id },
      });
    else
      dispatchTodos({
        type: "ADD",
        newTodo: { ...newTodo, id: uuid() },
      });

    history.push("/");
  };

  return (
    <div className="NewTodoForm">
      <Link to="/" className="NewTodoForm-go-back">
        Go back
      </Link>
      <h1 className="NewTodoForm-title">Create a new todo</h1>
      <form onSubmit={handleSubmit} className="NewTodoForm-form">
        <div className="NewTodoForm-input">
          <label for="name">
            Todo name ({todoNameWordsLeft} characters left)
          </label>
          <input
            required
            id="name"
            value={todoName}
            onChange={updateTodoName}
            placeholder="Todo name"
          />
        </div>
        <div className="NewTodoForm-input">
          <label for="info">
            Additional information ({todoInfoWordsLeft} characters left)
          </label>
          <textarea
            id="info"
            value={todoInfo}
            onChange={updateTodoInfo}
            placeholder="I need to..."
            cols={50}
            rows={5}
          />
        </div>
        <button className="NewTodoForm-input-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(NewTodoForm);
