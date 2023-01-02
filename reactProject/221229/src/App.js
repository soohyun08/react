/* 
rsf 단축키: 선언함수형 컴포넌트
rsc 단축키: 함수 표현식 컴포넌트

import React from "react"; // node_modules에서 임포트
  ㄴ 컴퍼넌트명 : 첫글자는 반드시 대문자로 시작
  ㄴ 연결 파일: .js, .jsx, .css, .png, .svg, ...

  const 컴포넌트명 = () => {
    return (
      <>  <- fragment
        JSX
        화면에 보이는 영역
        html과 비슷하나 태그가 아님
        개발을 쉽게 하기 위해 태그 형식으로 사용
      </>
    );
  }
  export default 컴포넌트명;
  
*/
import Ex1 from "./components/Ex1";
import Ex2 from "./components/Ex2";
import Ex3 from "./components/Ex3";
import Ex4_const from "./components/Ex4_const";
import Ex5_css from "./components/Ex5_css";
import TimeEx from "./components/TimeEx";
import Ex6 from "./components/Ex6";
import Ex7_props from "./components/Ex7_props";

function App() {
  return (
    <>
      {/* <Ex1 />
      <hr />
      <Ex2 />
      <hr />
      <Ex3 />
      <hr />
      <Ex4_const />
      <hr />
      <Ex5_css />

      <TimeEx />

      <Ex6 />*/}
      <Ex7_props />
    </>
  );
}

export default App;
