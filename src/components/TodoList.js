import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TodoItem from "./TodoItem";
import TodoListFilterButton from "./TodoListFilterButton";
import { TodosContext } from "../contexts/todos.context";
import "./TodoList.css";

export default function TodoList(props) {
  const [springProp, setSpringProp] = useSpring(() => ({
    to: {
      transform: "translateY(0)",
      opacity: 1,
    },
    from: {
      width: "100%",
      opacity: 0,
      transform: "translateY(150px)",
    },
  }));

  const todos = useContext(TodosContext);

  const [filter, setFilter] = useState("Pending");

  const todoItems = filter
    ? todos
        .filter((todo) => todo.status === filter)
        .map((todo) => <TodoItem {...todo} />)
    : todos.map((todo) => <TodoItem {...todo} />);

  return (
    <div className="TodoList">
      <div className="TodoList-title">
        <h1>Your todos</h1>
      </div>
      <div className="TodoList-filters">
        {["Pending", "Doing", "Done"].map((f) => (
          <TodoListFilterButton
            animationHandler={setSpringProp} // these buttons will update the animation of the list
            updateFilter={setFilter}
            title={f}
            actualFilter={filter}
            key={f}
          />
        ))}
      </div>

      <div className="TodoList-add-todo-wrapper">
        <Link className="TodoList-add-todo TodoList-btn" to="/new">
          Add new todo
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </Link>
      </div>
      <animated.div style={springProp} className="TodoList-todos">
        {todoItems}
      </animated.div>
    </div>
  );
}
