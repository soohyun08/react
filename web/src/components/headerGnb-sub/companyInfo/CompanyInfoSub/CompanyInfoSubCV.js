import React from "react";

const cvLis = [
  { id: 1, num: 1 },
  { id: 2, num: 2 },
];

function CompanyInfoSubCV(props) {
  return (
    <div>
      <ul>
        {cvLis.map((item) => (
          <li key={item.id}>
            <a href="#">회사비전 스타일{item.num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyInfoSubCV;
