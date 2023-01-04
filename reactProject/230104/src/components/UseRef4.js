import { useRef, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  margin: 50px;
  transition: 0.5s;
  text-align: center;
`;

function UseRef4(props) {
  // 가상돔을 참조할 빈 객체 생성 / ref: 값을 보관하고 있음
  const boxRef = useRef(null);
  // 재할당이 되어야해서 상수가 아닌 let 사용
  let [num, setNum] = useState(0);
  console.log(boxRef.current);

  function prevRotate() {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  }
  function nextRotate() {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  }
  return (
    <>
      <Box ref={boxRef}>box</Box>

      <button onClick={prevRotate}>&lt;</button>
      <button onClick={nextRotate}>&gt;</button>
    </>
  );
}

export default UseRef4;
