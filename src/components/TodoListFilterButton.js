import React from "react";

export default function TodoListFilterButton(props) {
  const { title, actualFilter, updateFilter } = props;

  const changeFilter = () => {
    if (title === actualFilter) updateFilter("");
    else updateFilter(title);
  };

  return (
    <div
      onClick={changeFilter}
      className={`TodoList-filter ${actualFilter === title && "active"}`}
    >
      {title.toUpperCase()}
    </div>
  );
}
