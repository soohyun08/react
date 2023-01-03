import { useState } from "react";

function Ex1State1() {
  const [isChk, setIsChk] = useState(false);
  const onCheck = (e) => {
    // e.target.checked
    const { checked } = e.target;
    setIsChk(checked);
  };

  return (
    <>
      <h2>오늘 할 일</h2>
      <p
        style={{
          fontWeight: "bold",
          color: isChk ? "maroon" : "tomato",
          textDecoration: isChk ? "line-through" : "none",
        }}
      >
        <input type="checkbox" onChange={onCheck} checked={isChk} />
        리액트 공부하기
      </p>
    </>
  );
}

export default Ex1State1;
