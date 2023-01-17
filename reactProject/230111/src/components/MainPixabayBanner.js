import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import "./mainPixabayBanner.scss";

import { useEffect, useState } from "react";
import axios from "axios";

function MainPixabayBanner() {
  const [data, setData] = useState([]);
  const key = `32644675-b73ce007d3edb19e3965930d1`;
  const url = `https://pixabay.com/api/?key=${key}&q=babys&image_type=photo`;

  useEffect(() => {
    /* 1. 
      axios.get(url).then((json) => {
      console.log(json.data.hits.slice(0, 4));
      setData(json.data.hits.slice(0, 4));
      // 배열 잘라내기 slice(시작 인덱스 숫자, 끝 인덱스 숫자)
    }); 
    */

    // 2. 상수에 넣어서 사용
    const getData = async () => {
      const imgs = await axios.get(url);
      console.log(imgs.data.hits);
      setData(imgs.data.hits.slice(0, 4));
    };
    getData();
  }, []);

  return (
    <article>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pixabaySwiper"
      >
        {data.map((img) => (
          <SwiperSlide className="bg" key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default MainPixabayBanner;
