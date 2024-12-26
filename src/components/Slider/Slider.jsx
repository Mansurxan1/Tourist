import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';
import { useTour } from '../../context/Context';
import { Link } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Slider = () => {
  const { bestDayTours } = useTour();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);

  return (
    <div className="slider__container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: '.swiper-pagination', bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        className="slider__swiper"
      >
        {bestDayTours.map((data, index) => (
          <SwiperSlide key={index} className="slider__slide" data-aos="flip-left" >
            <img src={data.image} alt={data.title} className="slider__slide-image" />
            <div className="slider__slide-content">
              <h1 className="slider__slide-content-title">
                {data.title}
              </h1>
              <p className="slider__slide-content-subtitle">{data.description}</p>
              <Link to={`/travel-best/${data.id}`} state={{ tourData: data }} className="slider__slide-content-button">BATAFSIL</Link>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider__pagination swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
