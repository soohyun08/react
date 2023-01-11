import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  align-items: center;

  grid-row: 1/2;
  grid-column: 2/4;
  ul {
    display: flex;
    li {
      margin-right: 10px;
      a {
        font-size: 0.7em;
        color: #fff;
        background-color: rgb(178, 164, 132);
        padding: 6px 9px;
      }
      &:nth-child(2) a {
        background-color: rgb(10, 89, 10);
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
