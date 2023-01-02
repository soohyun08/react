import { useState } from "react";
/* 
state
    상태. 상태 변화를 위해 사용하는 hook
    랜더링이 될 때마다 화면에 새롭게 그려내는 방식이므로 상태 유지를 하지 못함
    새롭게 개랜더링되어 함수, 변수 등 다시 초시화 됨
    그래서 값을 유지하기 위해 hook을 사용
    상태 값이 변경되는 경우 useState()

    const [state, setState] = useState(초기값);
    const [상태데이터(변수), 상태값을 변경하기 위한 함수] = useState(초기값);
    초기값: 숫자, 문자, 논리, 배열, 객체 등등
*/

const Ex5_state1 = () => {
  const [name, setName] = useState("메뉴");
  const [price, setPrice] = useState(4000);
  const [color, setColor] = useState("#eee");

  const onCoffee1 = () => {
    setName("아이스 아메리카노");
    // setPrice(4000);
  };
  const onCoffee2 = () => {
    setName("아이스 라떼");
    // setPrice(4500);
  };
  const onCoffee3 = () => {
    setName("아이스 모카");
    // setPrice(5000);
  };

  const onColor1 = () => {
    setColor("orange");
  };
  const onColor2 = () => {
    setColor("tomato");
  };
  const onColor3 = () => {
    setColor("salmon");
  };
  return (
    <div>
      <h1>state 1</h1>
      <h2
        style={{
          border: "1px solid #000",
          padding: 20,
          backgroundColor: color,
        }}
      >
        커피: {name} / 가격: {price} / 색상: {color}
      </h2>
      <p>
        <button onClick={onCoffee1}>아메리카노</button>
        <button onClick={onCoffee2}>라떼</button>
        <button onClick={onCoffee3}>모카</button>
      </p>
      <p>
        <button onClick={() => setPrice(4500)}>4500원</button>
        <button onClick={() => setPrice(5000)}>5000원</button>
        <button onClick={() => setPrice(5500)}>5500원</button>
      </p>
      <p>
        <button onClick={onColor1}>오렌지</button>
        <button onClick={onColor2}>토마토</button>
        <button onClick={onColor3}>분홍색</button>
      </p>
    </div>
  );
};

export default Ex5_state1;
