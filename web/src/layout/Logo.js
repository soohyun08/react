import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 23%;
  text-align: right;
  padding-right: 40px;
  float: left;
`;

function Logo(props) {
  const path = process.env.PUBLIC_URL;
  return (
    <Container>
      <h1>
        <a>
          <img src={path + "images/Interior.png"} alt="logo" />
        </a>
      </h1>
    </Container>
  );
}

export default Logo;
