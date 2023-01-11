import React from "react";

const siLis = [
  { id: 1, num: 1 },
  { id: 2, num: 2 },
];

function ServiceInfo(props) {
  return (
    <div>
      <ul>
        {siLis.map((item) => (
          <li key={item.id}>
            <a href="#">서비스소개 스타일{item.num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceInfo;
