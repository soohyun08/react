import React from "react";

const ciLis = [
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
];

function CompanyInfoSubCI(props) {
  return (
    <div>
      <ul>
        {ciLis.map((item) => (
          <li key={item.id}>
            <a href="#">회사소개 스타일{item.num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyInfoSubCI;
