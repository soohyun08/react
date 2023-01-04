import styled, { css } from "styled-components";

//${ props => props.props명}
const Container = styled.div`
  width: ${(props) => props.wt};
  border: 1px solid #000;
  margin: 10px auto;
  background-color: ${(props) =>
    props.bg
      ? props.bg
      : "orange"}; // props.bg에 색이 있으면 props.bg로 하고 없으면 orange로 해라.
`;

const Box = styled.button`
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#6fa")};
  border: none;
  margin: 10px;
  padding: 5px 10px;
  width: ${(props) => (props.width ? props.width : "100px")};

  ${(props) =>
    props.primary &&
    css`
      background-color: #000;
      color: #fff;
      width: 80%;
      transition: 0.4s;
      display: block;
      &:hover {
        background-color: maroon;
      }
    `}// props.primary가 있으면 css 이후 값을 부여해라
`;

function StyledCom2() {
  return (
    // 사용자 정의 props이름 -> wt, bg
    <Container wt="70vw" bg="lightsteelblue">
      <Box width="120px" bgcolor="salmon">
        box1
      </Box>
      <Box width="200px" bgcolor="tomato">
        box2
      </Box>
      <Box>box3</Box>
      <Box>box4</Box>
      <Box primary>box5</Box>
    </Container>
  );
}

export default StyledCom2;
