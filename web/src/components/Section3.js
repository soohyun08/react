import React from "react";
import styled from "styled-components";

const reviews = [
  {
    id: 1,
    url: "images/sec2-1.webp",
    alt: "interior1",
  },
  {
    id: 2,
    url: "images/sec2-2.webp",
    alt: "interior2",
  },
  {
    id: 3,
    url: "images/sec2-3.webp",
    alt: "interior3",
  },
  {
    id: 4,
    url: "images/sec2-4.webp",
    alt: "interior4",
  },
  {
    id: 5,
    url: "images/sec2-5.webp",
    alt: "interior5",
  },
  {
    id: 6,
    url: "images/sec2-6.webp",
    alt: "interior6",
  },
  {
    id: 7,
    url: "images/sec2-7.webp",
    alt: "interior7",
  },
  {
    id: 8,
    url: "images/sec2-8.webp",
    alt: "interior8",
  },
];

const Container = styled.div`
  width: 70%;
  margin: 0 auto 60px;
  /* background: url(path + "/images/bg_dot_gray.png") no-repeat -40px -50px /
    200px; */
  padding-top: 30px;
  h2 {
    margin: 0 auto;
    font-size: 2.2em;
    height: 100px;
    span {
      display: block;
      font-size: 0.5em;
      margin-bottom: 10px;
    }
    strong {
      font-weight: 600;
      padding-left: 10px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 300px;
      height: 17vw;
      position: relative;
      justify-content: center;
      margin: 20px 0;
      z-index: 9999;
      transition: 0.2s;
      &:hover {
        transform: translateY(-10px);
      }
      img {
        width: 300px;
      }
      p {
        width: 260px;
        height: 90px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        span {
          padding: 15px 0 0;
        }
      }
    }
  }
`;

function Section3(props) {
  const path = process.env.PUBLIC_URL;
  return (
    <Container>
      <h2>
        <span>봄시즌 우리집 꾸미기</span>고객들의
        <strong>집꾸밈 이야기</strong>
      </h2>

      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <img src={path + item.url} alt={item.alt} />
            <p>
              어떠한 형태로도 이를 창설할...
              <span>2022.04.07</span>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Section3;
