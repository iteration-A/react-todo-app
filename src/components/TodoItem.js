import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CategoryIcon from "@material-ui/icons/Category";
import "./TodoItem.css";

export default function TodoItem(props) {
  const { name, info, category, status } = props;

  const doneField = (
    <div className={`TodoItem-content-extra-2 ${status}`}>
      {status.toUpperCase()}
    </div>
  );

  return (
    <div className="TodoItem">
      <div className="TodoItem-title">
        <h3>{name}</h3>
      </div>
      <div className="TodoItem-content">
        <p>{info}</p>
        <div className="TodoItem-content-extra">
          <div className="TodoItem-content-extra-1">
            <IconButton aria-label="category">
              <CategoryIcon />
            </IconButton>
            {category}
          </div>
          {doneField}
        </div>
      </div>
    </div>
  );
}
