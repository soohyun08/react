// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
// 스타일
import "./mainService.scss";

import axios from "axios";
import { useEffect, useRef, useState } from "react";

function MainService() {
  const [data, setData] = useState([]);
  const swiperRef = useRef(null);
  const url =
    "https://pixabay.com/api/?key=32644675-b73ce007d3edb19e3965930d1&q=spa+lemon&image_type=photo";

  useEffect(() => {
    const getData = async () => {
      const imgs = await axios.get(url);
      console.log(imgs.data.hits);
      setData(imgs.data.hits.slice(0, 13));
    };
    getData();
    swiperRef.current.classList.add("active"); // getData() 데이터를 불러왔을 때, class active를 붙이기
  }, [data]);

  return (
    <article className="mainService">
      <h2 className="title">Our Service</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        ref={swiperRef}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="serviceImg">
            <img src={item.largeImageURL} alt={item.tags} />
            <h3>{item.tags.split(",", 1)}</h3>
            <p>{item.tags}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default MainService;
