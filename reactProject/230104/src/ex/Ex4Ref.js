import React, { useRef } from "react";

function Ex4Ref() {
  // 생성
  const color = useRef(null);

  // 사용
  const onchk = (e) => {
    // console.log(color); Ref color은 객체로 저장됨
    console.log(color.current.value); // 값으로 돌려받기
  };

  return (
    <>
      {/* 선택된 컬러 콘솔 출력 */}
      <select ref={color}>
        <option value="orange">orange</option>
        <option value="tomato">tomato</option>
        <option value="salmon">salmon</option>
        <option value="teal">teal</option>
      </select>
      <button onClick={onchk}>확인</button>
    </>
  );
}

export default Ex4Ref;
