import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./mainBanner.scss";

import { Autoplay, Navigation, Pagination } from "swiper";

import img3 from "../assets/images/img3.png";

function MainBanner() {
  const path = process.env.PUBLIC_URL;
  return (
    <article>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mainSwiper"
      >
        {/* Public 폴더 이미지 */}
        <SwiperSlide className="bg">
          <img
            src={process.env.PUBLIC_URL + "./images/slider.jpg"}
            alt="img1"
          />
        </SwiperSlide>
        {/* src 폴더 배경 */}
        <SwiperSlide className="bg bg2">Slide 2</SwiperSlide>
        {/* src 폴더 이미지*/}
        <SwiperSlide className="bg">
          <img src={img3} alt="img3" />
        </SwiperSlide>
      </Swiper>
    </article>
  );
}

export default MainBanner;
