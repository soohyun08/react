import React from "react";
import "./section3.scss";

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

function Section3() {
  const path = process.env.PUBLIC_URL;
  return (
    <article className="section3">
      <div className="bgGray"></div>
      <div className="section3Txt">
        <div className="section3Dots"></div>
        <h2>
          <span>봄시즌 우리집 꾸미기</span>고객들의
          <strong>집꾸밈 이야기</strong>
        </h2>
      </div>

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
    </article>
  );
}

export default Section3;
