import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useInputForm from "../hooks/useInputForm";

export default function FormDialog(props) {
  const { open, close, createLabel } = props;

  const [labelName, updateLabelName] = useInputForm();

  const handleCreate = () => {
    createLabel(labelName);
    close();
  };

  return (
    <div>
      <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new label</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Labels can be used to sort your todos
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={updateLabelName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
