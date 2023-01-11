import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

//  스타일 다루는 방법
import "./styles.module.css";
/* import "./styles.scss";
import styled from "styled-components"; */

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const data = [
  {
    id: 1,
    url: "/images/img1.png",
    title: "cat",
  },
  {
    id: 2,
    url: "/images/img2.png",
    title: "stars1",
  },
  {
    id: 3,
    url: "/images/img3.png",
    title: "stars2",
  },
  {
    id: 4,
    url: "/images/img4.png",
    title: "stars3",
  },
];

function Swiper1() {
  const path = process.env.PUBLIC_URL;

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // breakpoints
        slidesPerView={1}
        breakpoints={{
          761: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        // Autoplay
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        loop={true} // 4에서 1로 다시 반복
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={path + item.url} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Swiper1;
