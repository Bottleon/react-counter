import React, { useState, useEffect, useRef, useCallback } from "react";
import TodoInsert from "component/TodoInsert";
import TodoList from "component/TodoList";
import TodoTitle from "component/TodoTitle";
import "css/Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const todoId = useRef(1);

  const onChangeInput = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [input]
  );

  const onKeyPress = useCallback(
    (e) => {
      if (e.code === "Enter") {
        if (input !== "") {
          setTodos([
            ...todos,
            {
              id: todoId.current++,
              text: input,
              done: false,
            },
          ]);
          setInput("");
        }
      }
    },
    [input, todos]
  );

  const onToggle = useCallback(
    (id) => {
      const todo = todos.find((todo) => todo.id === id);
      todo.done = !todo.done;
      setTodos([...todos]);
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      const inx = todos.findIndex((todo) => todo.id === id);
      todos.splice(inx, 1);
      setTodos([...todos]);
    },
    [todos]
  );

  const onClickAddBtn = useCallback(() => {
    if (input !== "") {
      setTodos([
        ...todos,
        {
          id: todoId.current++,
          text: input,
          done: false,
        },
      ]);
      setInput("");
    }
  }, [input, todos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className={"container"}>
      <TodoTitle title="Todo List" />
      <TodoInsert
        input={input}
        onChangeInput={onChangeInput}
        onKeyPress={onKeyPress}
        onClickAddBtn={onClickAddBtn}
      />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
};
export default Todo;
