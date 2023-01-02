import React, { useState } from "react";
import "./externalStyle.css";
// 외부 스타일 문서 적용
import dataList from "../assets/data/dataList";
// 외부 data.js 문서 적용

function ExternalData(props) {
  const [data, setData] = useState(dataList);
  return (
    <>
      <table className="cafe">
        <caption>카페 메뉴</caption>
        <thead>
          <tr>
            <th>커피</th>
            <th>차</th>
            <th>음료</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {/* map */}
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.coffee}</td>
              <td>{item.tea}</td>
              <td>{item.drinks}</td>
              <td>{item.others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ExternalData;
