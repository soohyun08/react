import { createContext, useMemo, useState } from "react";

// 1. 전체 관리자 선언
export const ColorContext = createContext();

//2. 해당 UI컴포넌트 설정 (함수, 상태...)
function ColorProvider(props) {
  const [color, setColor] = useState("#ddd");

  const onOrange = () => {
    setColor("orange");
  };
  const onTomato = () => {
    setColor("tomato");
  };
  const onTeal = () => {
    setColor("teal");
  };
  const onSkyblue = () => {
    setColor("skyblue");
  };

  const value = useMemo(
    () => ({ color, onOrange, onTomato, onTeal, onSkyblue }),
    [color, onOrange, onTomato, onTeal, onSkyblue]
  );

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorProvider;

/* 
https://ko.reactjs.org/docs/hooks-reference.html#usememo

useMemo( () => (),[]);
같은 값에 대입시 나오는 값이 동일한 경우 useMemo로 저장한 뒤 동일한 입력에 대응하는 방식
Context Provider에 전달하는 경우 주로 사용
const value = useMemo();
최적화를 위해 사용하는 리액트 훅
기억하고 있다가 불러오기
 */
