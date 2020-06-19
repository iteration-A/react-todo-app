import React from "react";

export default function TodoListFilterButton(props) {
  const { title, actualFilter, updateFilter, animationHandler } = props;

  const changeFilter = () => {
    // update animation to initial state and then wait 300ms to reanimate
    animationHandler({ transform: "translateY(150px)", opacity: 0 });
    setTimeout(() => {
      if (title === actualFilter) updateFilter("");
      else updateFilter(title);
      animationHandler({ transform: "translateY(0)", opacity: 1 });
    }, 300);
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
