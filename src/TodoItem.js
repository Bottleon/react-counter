import React, { memo } from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="item">
      <div>
        <input
          className="item-checkbox"
          type="checkbox"
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? " delete-line opacity_5" : "item-text"}>
          {todo.text}
        </span>
      </div>
      <input
        className="item-remove_btn"
        type="button"
        value="❌"
        onClick={() => onRemove(todo.id)}
      />
    </div>
  );
};

export default memo(TodoItem);
