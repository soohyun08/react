import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const { color } = useContext(ColorContext);
  return (
    <div>
      <hr />
      <h2 style={{ color: color }}>해야할 것들 / {color}</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Todo;
