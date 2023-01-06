import React, { useEffect, useState } from "react";

function Ex2userEffect(props) {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  let timer = null; // 함수, 객체 초기화
  useEffect(() => {
    if (isActive) {
      timer = setInterval(() => {
        setCount((con) => con + 1);
      }, 1000);
    } else {
      clearInterval(timer); // 멈춤
    }

    return () => {
      console.log("clean-up");
      clearInterval(timer); // 싸인 데이터 버림
    };
  }, [isActive]); // onToggle을 눌러 isActive가 될 때마다 랜더링

  function onToggle() {
    setIsActive(!isActive);
  }

  function onReset() {
    setCount(0);
    setIsActive(false);
  }

  return (
    <>
      {/* 1초마다 카운트 */}
      <h1>count : {count}</h1>
      <button onClick={onToggle}>{isActive ? "멈춤" : "시작"}</button>

      <button onClick={onReset}>정지 및 초기화</button>
    </>
  );
}

export default Ex2userEffect;
