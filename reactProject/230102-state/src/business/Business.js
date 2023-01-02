import React from "react";
import data from "./data";
import "./style.css";

// 최상위 컴포넌트
function Business(props) {
  return (
    <article className="business">
      <h1>business</h1>
      <h2>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</h2>

      {data.map((item) => (
        <ul>
          <li key={item.id}>
            <img src={item.url} alt={item.id} />
            <h3>
              {item.h3}
              {item.span}
            </h3>
            <p>{item.p}</p>
          </li>
        </ul>
      ))}

      <div className="btn">
        <a href="#">View More</a>
      </div>
    </article>
  );
}

export default Business;
