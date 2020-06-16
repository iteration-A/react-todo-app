import React from "react";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function TodoItemPrompt(props) {
  const { history, open, status, todoName, onClose } = props;

  const options = ["Done", "Doing", "Pending", "Edit"].filter(
    (option) => option !== status
  );

  const handleListItemClick = (value) => {
    switch (value) {
      case "Edit":
        history.push(`/edit/${todoName}`);
        break;
      default:
        onClose();
    }
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="More options" open={open}>
      <DialogTitle id="More-options">What do you want to do?</DialogTitle>
      <List>
        {options.map((option) => {
          return (
            <ListItem
              button
              onClick={() => handleListItemClick(option)}
              key={option}
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
