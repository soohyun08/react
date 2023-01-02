// rsf(선언함수), rsc(표현식함수)

import React from "react";

// 자식 컴포넌트

/* 자식 컴포넌트 생성
const Coffee = (props) => {
  return (
    <div>
      <p>
        주문한 커피는 {props.name}, 가격은 {props.price}입니다.
      </p>
    </div>
  );
}; */

/* 구조분해할당 방법
const Coffee = (props) => {
  const { name, price } = props;

  return (
    <div>
      <p>
        주문한 커피는 {name}, 가격은 {price}입니다.
      </p>
    </div>
  );
}; */

// 가장 많이 사용: 매개변수 안에서 구조분해할당하고 넘겨주는 방법
const Coffee = ({ name, price }) => {
  return (
    <div>
      <p>
        주문한 커피는 {name}, 가격은 {price}입니다.
      </p>
    </div>
  );
};

function Ex1_props(props) {
  return (
    <div style={{ border: "1px solid #000", width: "70vw" }}>
      <h1>props</h1>
      {/* 자식 컴포넌트 생성 후 각 속성(props) 할당 -> 
      아메이카노, 4000원, 출력/  카페라테 45000원 출력 / 바닐리라떼 5000원 출력 */}

      <Coffee name="아메리카노" price="4000원" />
      <Coffee name="카페라떼" price="4500원" />
      <Coffee name="바닐라라떼" price="5000원" />
    </div>
  );
}

export default Ex1_props;
