import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: sandybrown;
  height: 200px;
  position: ;

  .main_article1-menu {
    color: #fff;
    position: absolute;
    bottom: -6vh;
    left: 50%;
    transform: translate(-50%);
    ul {
      display: flex;
    }
  }
`;

function Section1(props) {
  const lis = [
    { id: 1, name: "리모델링", span: "remodeling", svg: " refresh " },
    { id: 2, name: "키친 & 바스", span: "kitchen & bath", svg: " range_hood " },
    { id: 3, name: "빌트인수납", span: "builtin", svg: " room_preferences" },
    { id: 4, name: "가구", span: "furniture", svg: " bed " },
    { id: 5, name: "리모델링", span: "remodeling", svg: " refresh " },
  ];
  return (
    <Container>
      <ul className="main_article1-menu">
        {lis.map((item) => (
          <li key={item.id}>
            <a href="#">
              <h3>
                {item.name}
                <span>{item.span}</span>
              </h3>
              <span className="material-symbols-outlined">{item.svg}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Section1;
