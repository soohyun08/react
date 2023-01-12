import styled from "styled-components";
import HeaderIconNav from "./HeaderIconNav";
import { useState } from "react";
import HeaderIconSearch from "./HeaderIconSearch";

const Container = styled.div`
  width: 19%;
  float: left;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  svg {
    cursor: pointer;
    margin: 0 15px 0 7px;
  }
`;

function HeaderIconBar() {
  const [isShow, setIsShow] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  function menuToggle() {
    setIsShow(!isShow);
  }

  function searchToggle() {
    setIsSearch(!isSearch);
  }

  return (
    <Container>
      <div id="toggle_search" onClick={searchToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27.561" height="26.561">
          <g fill="none" stroke="#000" stroke-width="3">
            <g data-name="타원 1">
              <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
              <circle cx="12.5" cy="12.5" r="11" />
            </g>
            <path data-name="선 2" d="m22.5 21.5 4 4" />
          </g>
        </svg>
      </div>
      {isSearch && <HeaderIconSearch />}

      <div onClick={menuToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24.5">
          <g fill="none" stroke="#000" stroke-width="3">
            <path data-name="선 3" d="M0 23h26" />
            <path data-name="선 4" d="M6 12.5h20" />
            <path data-name="선 5" d="M0 1.5h26" />
          </g>
        </svg>
      </div>
      {isShow && <HeaderIconNav />}
    </Container>
  );
}

export default HeaderIconBar;
