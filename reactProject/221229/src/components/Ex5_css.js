import React from "react";
import "./Ex5.css";
// 외부 css 불러오기. 경로

function Ex5_css(props) {
  return (
    // class는 js 문법이기 때문에 JSX에서는 className으로 작성
    <div className="container">
      {/* 이 부분은 JSX 영역*/}
      <article className="orange">box1</article>
      <article className="teal">box2</article>
      <article className="lightcoral">box3</article>
      <article className="lightskyblue">box4</article>
    </div>
  );
}

export default Ex5_css;
