import { Routes, Route } from "react-router-dom";
import CompanyInfo from "./headerGnb-sub/companyInfo/CompanyInfo";
import Gallery from "./headerGnb-sub/gallery/Gallery";
import News from "./headerGnb-sub/news/News";
import ProductService from "./headerGnb-sub/productService/ProductService";
import styled from "styled-components";

const GnbLis = [
  {
    id: 1,
    name: "회사소개",
    subMenu: <CompanyInfo />,
  },
  {
    id: 2,
    name: "제품서비스",
    subMenu: <ProductService />,
  },
  {
    id: 3,
    name: "갤러리",
    subMenu: <Gallery />,
  },
  {
    id: 4,
    name: "새소식",
    subMenu: <News />,
  },
];

const Container = styled.div`
  width: 55%;
  margin: 0 auto;
  float: left;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      height: 44px;
      display: flex;
      align-items: flex-end;
      margin: 0 20px;
      position: relative;
      a {
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: #444;
        font-weight: 500;
        svg {
          width: 10px;
          margin: 0 10px;
          vertical-align: middle;
        }
      }
      .mainPage {
        color: rgb(178, 164, 132);
      }
      &:hover .gnbSubMenu {
        opacity: 1;
      }
      .gnbSubMenu {
        width: 200px;
        padding: 20px;
        position: absolute;
        bottom: -60px;
        left: -10px;
        z-index: 99;
        opacity: 0;
        transition: 0.3s;
      }
    }
  }
`;

function HeaderGnb() {
  return (
    <Container>
      <ul id="menu">
        <li>
          <a href="#" className="mainPage">
            메인페이지
          </a>
        </li>

        {GnbLis.map((item) => (
          <li>
            <a href="#">
              {item.name}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </a>
            <div className="gnbSubMenu">{item.subMenu}</div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default HeaderGnb;
