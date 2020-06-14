import React from "react";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Select from "@material-ui/core/Select";
import useInputForm from "../hooks/useInputForm";
import usePrompt from "../hooks/usePrompt";
import NewTodoFormCategoryPropmt from "./NewTodoFormCategoryPrompt";
import "./NewTodoForm.css";

export default function NewTodoForm(props) {
  const { categories, addTodo, history, addCategory } = props;

  const [todoName, updateTodoName] = useInputForm();
  const [todoInfo, updateTodoInfo] = useInputForm();
  const [todoLabel, updateTodoLabel] = useInputForm();

  const [popup, openPopup, closePopup] = usePrompt();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      name: todoName,
      info: todoInfo,
      category: todoLabel,
      status: "pending",
    };

    addTodo(newTodo);
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
          <label for="name">Todo name (10 words)</label>
          <input
            required
            id="name"
            value={todoName}
            onChange={updateTodoName}
            placeholder="Todo name"
          />
        </div>
        <div className="NewTodoForm-input">
          <label for="info">Additional information (250 characters)</label>
          <textarea
            id="info"
            value={todoInfo}
            onChange={updateTodoInfo}
            placeholder="I need to..."
            cols={50}
            rows={5}
          />
        </div>
        <FormControl className="NewTodoForm-input">
          <InputLabel shrink id="classificationLabel">
            Label
          </InputLabel>
          <div className="NewTodoForm-input-select-container">
            <Select
              required
              labelId="classificationLabel"
              id="label"
              value={todoLabel}
              onChange={updateTodoLabel}
              displayEmpty
              className="NewTodoForm-input-select"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <IconButton
              onClick={openPopup}
              className="NewTodoForm-input-select-btn"
            >
              <AddCircleIcon />
            </IconButton>
          </div>
        </FormControl>
        <button className="NewTodoForm-input-button" type="submit">
          Submit
        </button>
      </form>
      <NewTodoFormCategoryPropmt
        open={popup}
        close={closePopup}
        createLabel={addCategory}
      />
    </div>
  );
}
