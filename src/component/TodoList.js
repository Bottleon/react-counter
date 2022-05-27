import React, { memo } from "react";
import TodoItem from "component/TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className={"list"}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default memo(TodoList);
