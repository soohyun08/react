import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 23%;
  text-align: right;
  padding-right: 40px;
  float: left;
`;

function Logo() {
  const path = process.env.PUBLIC_URL;
  return (
    <Container>
      <h1>
        <Link to="/">
          <img src={path + "images/Interior.png"} alt="logo" />
        </Link>
      </h1>
    </Container>
  );
}

export default Logo;
