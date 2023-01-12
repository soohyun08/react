import React from "react";
import styled from "styled-components";

const data = [
  { id: 1, svg: "refresh", title: "리모델링" },
  { id: 2, svg: "range_hood", title: "키친 & 바스" },
  { id: 3, svg: "room_preferences", title: "빌트인수납" },
  { id: 4, svg: "bed", title: "가구" },
  { id: 5, svg: "category", title: "생활용품" },
];

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    li {
      width: 13vw;
      height: 30vh;
      background-color: #fff;
      margin: 0 10px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      transition: 0.2s;
      z-index: 9999;
      cursor: pointer;
      span {
        font-size: 3em;
        color: #a0937d;
      }
      h4 {
        font-size: 1.3em;
        font-weight: 500;
        padding: 20px 0 10px;
      }
      p {
        font-size: 0.8em;
      }
      &:hover {
        color: #fff;
        background-color: var(--color-beige);
        transform: translateY(-10px);
        background-color: #a0937d;
        span {
          color: #fff;
        }
      }
    }
  }
`;
function Section4(props) {
  return (
    <Container>
      <ul class="main4_wrapper">
        {data.map((item) => (
          <li key={item.id}>
            <span class="material-symbols-outlined">{item.svg}</span>
            <h4>{item.title}</h4>
            <p>인테리어 케이와 2022년 인테리어</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Section4;
