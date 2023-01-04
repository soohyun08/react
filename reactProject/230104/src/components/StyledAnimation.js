import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #ddd;
  display: grid;
  place-items: center;
`;

// 사전 설정 필요. 실행 컴포넌트 앞에 작성
const mov = keyframes`
    0%, 100% {transform:translateY(0)}
    25% {transform:translateY(-20px) rotate(20deg)}
    50% {transform:translateY(10px)}
    75% {transform:translateY(-20px) rotate(-20deg)}   
`;
const Rabbit = styled.div`
  text-align: center;
  font-size: 5em;
  animation: ${mov} 3s infinite ease-in-out;
`;

function StyledAnimation() {
  return (
    <Container>
      <Rabbit>🐰</Rabbit>
    </Container>
  );
}

export default StyledAnimation;
