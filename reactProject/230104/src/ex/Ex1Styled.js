import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.size ? props.size : "50%")};
  border: 1px solid #000;
  height: 300px;
  margin: 50px auto;
  display: grid;
  place-content: space-evenly;
  h2 {
    font-family: "나눔고딕", sans-serif;
    font-size: 2em;
    font-weight: bold;
  }
`;
const Button = styled.button`
  border: none;
  font-size: 2em;
  background-color: #ddd;
  padding: 10px 30px;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
  &.plus::after {
    content: "🔼";
  }
  &.minus::after {
    content: "🔽";
  }
  &:disabled {
    background-color: red;
    cursor: not-allowed;
    filter: grayscale(60%);
    opacity: 0.8;
  }
`;

function Ex1Styled() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count >= max ? max : count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  /*   증감연산자 사용시
  let [count, setCount] = useState(0);
  const increment = () => {setCount(count++)} 
  */

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  return (
    <Container>
      {/* 카운터 1씩 증가, 1씩 감소 */}
      <h2>카운트: {count}</h2>
      <Button
        className="plus"
        onClick={increment}
        // disabled={count === max}
      ></Button>
      <Button
        className="minus"
        onClick={decrement}
        disabled={count === min}
      ></Button>
    </Container>
  );
}

export default Ex1Styled;
