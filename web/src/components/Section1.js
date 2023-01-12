import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./section1.scss";

import { Navigation, Pagination } from "swiper";

function Section1() {
  const path = process.env.PUBLIC_URL;

  const lis = [
    { id: 1, name: "리모델링", span: "remodeling", svg: " refresh " },
    { id: 2, name: "키친 & 바스", span: "kitchen & bath", svg: " range_hood " },
    { id: 3, name: "빌트인수납", span: "builtin", svg: " room_preferences" },
    { id: 4, name: "가구", span: "furniture", svg: " bed " },
    { id: 5, name: "리모델링", span: "remodeling", svg: " refresh " },
  ];

  return (
    <div className="section1">
      <article>
        <Swiper
          pagination={true}
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={path + "/images/slider.jpg"} alt="img1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={path + "/images/slider.jpg"} alt="img2" />
          </SwiperSlide>
        </Swiper>

        <div className="txt">
          <p>2022 봄 인테리어 제안</p>
          <h2>에코글로벌 패스파인더</h2>
          <p>사회적 특수계급의 제도는 인정되지 아니하며,</p>
          <p>어떠한 형태로도 이를 창설할 수 없다.</p>
        </div>

        <ul className="menu">
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
      </article>
    </div>
  );
}

export default Section1;
