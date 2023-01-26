import { useTodo } from "../contexts/TodoContext";

function TodoItems({ item }) {
  const { id, text, isChk } = item;
  const { onToggle, onDel } = useTodo();

  return (
    <li style={{ color: isChk ? "#ddd" : "#000" }}>
      <input type="checkbox" checked={isChk} onChange={() => onToggle(id)} />
      {text}
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
}

export default TodoItems;
