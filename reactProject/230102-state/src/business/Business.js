import React from "react";
import BusinessList from "../BSN/BusinessList";
import "./style.css";

// 최상위 컴포넌트
function Business(props) {
  return (
    <article className="business">
      <h1>business</h1>
      <h2>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</h2>
      <BusinessList />
      <div className="btn">
        <a href="#">View More</a>
      </div>
    </article>
  );
}

export default Business;
