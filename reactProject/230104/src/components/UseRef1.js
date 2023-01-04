import { useState, useRef } from "react";

/* 
useRef();
  ㄴ 특정 값을 저장하기 위해 사용.
  ㄴ 특정 값이 변경되어도 렌더링이 일어나지 않음. 즉 렌더링을 하고 싶지 않을 때 사용.
  ㄴ .current 안에 값을 저장하기 때문에 렌더링 어려움  
*/
function UseRef1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("렌더링 + 1");

  const increaseState = () => {
    setCount(count + 1);
  };

  function increaseRef() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseState}>useState</button>
      <button onClick={increaseRef}>useRef</button>
    </>
  );
}

export default UseRef1;
