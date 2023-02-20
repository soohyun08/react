import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import { useEffect, useRef, useState } from "react";

import "./mainService.scss";
import { useDispatch, useSelector } from "react-redux";

function SwiperEx() {
  const pics = useSelector((store) => store.pixabay.data);
  const dispatch = useDispatch();

  const [data, setData] = useState(pics);
  const swiperRef = useRef(null);

  useEffect(() => {
    dispatch(fetchPixabay());
    swiperRef.current.classList.add("active");
  }, [data]);

  return (
    <>
      <article className="mainService">
        <div className="mainServiceInner">
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
        </div>
      </article>
    </>
  );
}

export default SwiperEx;
