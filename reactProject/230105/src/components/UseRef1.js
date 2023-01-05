import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px auto;
  border: 2px solid #000;
  width: ${(props) => (props.width ? props.width : "80vw")};
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  padding: 5px 10px;
  margin: 10px;
  background-color: hotpink;
  font-size: 1.1em;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

function UseRef1() {
  // 문자열을 배열로 반환 받기
  const coffee =
    "아메리카노, 카페라떼, 바닐라라떼, 에스프레소, 카페모카, 디카페인, 아인슈페너, 콜드브루, 플랫화이트, 드립커피".split(
      ","
    );
  //.split(',') -> ,를 기준으로 나눠서 배열로 받기

  const idNum = useRef(1); // 1부터 시작하는 고유번호 붙여주겠다
  const [data, setData] = useState([]);

  function onPrint() {
    const ran = Math.trunc(Math.random() * coffee.length); // coffee.length -> 배열의 요소의 수. 인덱스 0~9까지 나옴
    setData([
      ...data,
      {
        id: idNum.current++,
        name: coffee[ran],
      },
    ]);
  }

  return (
    <Container>
      <Button onClick={onPrint}>출력</Button>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default UseRef1;
