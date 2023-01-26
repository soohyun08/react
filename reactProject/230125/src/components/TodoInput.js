import { useTodo } from "../contexts/TodoContext";

function TodoInput() {
  const { txt, changeInput, onAdd } = useTodo();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!txt) return; // text가 작성되지 않았으면 그냥 넘겨라
    onAdd(txt); // 잘 작성하면 추가해라
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={txt} onChange={changeInput} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInput;
