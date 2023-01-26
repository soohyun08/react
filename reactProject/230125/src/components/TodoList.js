import { useTodo } from "../contexts/TodoContext";
import TodoItems from "./TodoItems";

function TodoList() {
  const { todo } = useTodo();

  return (
    <ul>
      {todo.map((item) => (
        <TodoItems key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default TodoList;
