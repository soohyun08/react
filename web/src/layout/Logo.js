import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  a {
    height: 7vh;
    margin-right: auto;
  }
`;

function Logo(props) {
  const path = process.env.PUBLIC_URL;
  return (
    <Container>
      <h1>
        <a href="#">
          <img src={path + "images/Interior.png"} alt="logo" />
        </a>
      </h1>
    </Container>
  );
}

export default Logo;
