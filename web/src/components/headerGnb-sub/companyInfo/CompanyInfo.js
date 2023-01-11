import React from "react";
import CompanyInfoSubCI from "./CompanyInfoSub/CompanyInfoSubCI";
import CompanyInfoSubCV from "./CompanyInfoSub/CompanyInfoSubCV";

const companyInfoLis1 = [
  { id: 1, name: "회사소개", subMenu: <CompanyInfoSubCI /> },
  { id: 2, name: "회사비전", subMenu: <CompanyInfoSubCV /> },
];

const companyInfoLis2 = [
  { id: 3, name: "회사연혁" },
  { id: 4, name: "조직소개" },
  { id: 5, name: "오시는길" },
];
function CompanyInfo(props) {
  return (
    <>
      <ul>
        {companyInfoLis1.map((item) => (
          <li key={item.id}>
            <a href="#">
              {item.name}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </a>
            {item.subMenu}
          </li>
        ))}

        {companyInfoLis2.map((item) => (
          <li key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CompanyInfo;
