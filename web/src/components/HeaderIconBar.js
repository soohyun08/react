import styled from "styled-components";

const Container = styled.div`
  margin: 15px auto 0;
  grid-row: 2/3;
  grid-column: 3/4;
  display: flex;
  justify-content: flex-end;
  a {
    margin: 0 15px;
  }
`;

function HeaderIconBar(props) {
  return (
    <Container>
      <a href="#" id="toggle_search">
        <svg xmlns="http://www.w3.org/2000/svg" width="27.561" height="26.561">
          <g fill="none" stroke="#000" stroke-width="3">
            <g data-name="타원 1">
              <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
              <circle cx="12.5" cy="12.5" r="11" />
            </g>
            <path data-name="선 2" d="m22.5 21.5 4 4" />
          </g>
        </svg>
      </a>

      <a href="#" id="toggle_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24.5">
          <g fill="none" stroke="#000" stroke-width="3">
            <path data-name="선 3" d="M0 23h26" />
            <path data-name="선 4" d="M6 12.5h20" />
            <path data-name="선 5" d="M0 1.5h26" />
          </g>
        </svg>
      </a>
    </Container>
  );
}

export default HeaderIconBar;
