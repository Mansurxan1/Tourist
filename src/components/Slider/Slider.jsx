import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.scss';
import { useTour } from '../../context/Context';
import { Link } from 'react-router-dom';

const Slider = () => {
  const { bestDayTours } = useTour();

  return (
    <div className="slider__container">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="slider__swiper"
      >
        {bestDayTours.map((data, index) => (
          <SwiperSlide key={index} className="slider__slide">
            <img
              src={data.image}
              alt={data.title}
              className="slider__slide-image"
            />
            <div className="slider__slide-content">
              <h1 className="slider__slide-content-title">{data.title}</h1>
              <p className="slider__slide-content-subtitle">
                {data.description}
              </p>
              <Link
                to={`/travel-best/${data.id}`}
                state={{ tourData: data }}
                className="slider__slide-content-button"
              >
                BATAFSIL
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider__pagination swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
