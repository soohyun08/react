import { createContext, useContext, useMemo, useState, useRef } from "react";

// 관리자 만들기
const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

function TodoProvider(props) {
  const [todo, setTodo] = useState([
    { id: 1, text: "포폴 만들기", isChk: true },
    { id: 2, text: "빨래", isChk: false },
    { id: 3, text: "수리", isChk: false },
  ]);

  const changeInput = (e) => {
    const { value } = e.target;
    setTxt(value);
  };

  const [txt, setTxt] = useState("");

  const onDel = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  }; // 넘겨 받은 id와 같은 값을 filter로 걸러내서, 그걸 뺀 나머지만 화면에 보이게 한다. 부정연산자.

  const onToggle = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isChk: !item.isChk } : item
      )
    );
  };

  const no = useRef(todo.length + 1);

  const onAdd = (txt) => {
    setTodo([
      ...todo,
      {
        id: no.current++,
        text: txt,
        isChk: false,
      },
    ]);
    setTxt("");
  };

  const value = useMemo(
    () => ({ todo, txt, changeInput, onDel, onToggle, onAdd }),
    [todo, txt, changeInput, onDel, onToggle, onAdd]
  );

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}

export default TodoProvider;
