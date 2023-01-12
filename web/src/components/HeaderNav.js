import styled from "styled-components";

const Container = styled.div`
  margin: 10px auto;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  text-align: center;
  align-items: center;

  ul {
    display: flex;
    li {
      margin-right: 10px;
      a {
        font-size: 0.8em;
        color: #fff;
        background-color: #a0937d;
        padding: 6px 10px;
      }
      &:nth-child(2) a {
        background-color: #3a6351;
      }
    }
  }
`;

const navLis = [
  { id: 1, name: "회사소개" },
  { id: 2, name: "소식마당" },
  { id: 3, name: "로그인" },
];
function HeaderNav() {
  return (
    <Container>
      <ul id="register">
        {navLis.map((item) => (
          <li key={item.id}>
            <a href="#"> {item.name}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default HeaderNav;
