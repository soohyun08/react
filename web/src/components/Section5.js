import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./section5.scss";

import { Navigation, Pagination } from "swiper";

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

function Section5(props) {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <div className="section5Txt">
        <h2>
          <span>우리집을 밝게 빛내 줄</span>
          <br />
          2022
          <strong>가구인테리어</strong>
        </h2>
      </div>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={4}
        className="mySwiper section5"
      >
        {reviews.map((item) => (
          <SwiperSlide className="SwiperSlide" key={item.id}>
            <img src={path + item.url} alt={item.alt} />
            <p>
              어떠한 형태로도 이를 창설할...
              <span>2022.04.07</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Section5;
