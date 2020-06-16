import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DispatchTodosContext } from "../contexts/todos.context";
import "./TodoItemPrompt.css";

function TodoItemPrompt(props) {
  const dispatchTodos = useContext(DispatchTodosContext);

  const { history, open, status, todoId, close } = props;

  const options = ["Done", "Doing", "Pending", "Edit"].filter(
    (option) => option !== status
  );

  const handleListItemClick = (value) => {
    switch (value) {
      case "Edit":
        history.push(`/edit/${todoId}`);
        break;
      case "Done":
        dispatchTodos({ type: "UPDATE_DONE", todoId });
        break;
      case "Doing":
        dispatchTodos({ type: "UPDATE_DOING", todoId });
        break;
      case "Pending":
        dispatchTodos({ type: "UPDATE_PENDING", todoId });
        break;
      default:
        close();
    }
    close();
  };

  return (
    <Dialog onClose={close} aria-labelledby="More options" open={open}>
      <DialogTitle id="More-options">What do you want to do?</DialogTitle>
      <List>
        {options.map((option) => {
          return (
            <ListItem
              button
              onClick={() => handleListItemClick(option)}
              key={option}
              className={`TodoItemPrompt-option ${option.toLowerCase()}`}
            >
              <ListItemText primary={option} />
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
}

export default withRouter(TodoItemPrompt);
