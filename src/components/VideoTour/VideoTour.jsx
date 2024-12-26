import { useTour } from "@/context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./VideoTour.scss";
import { Navigation, Pagination } from "swiper/modules";

const VideoTour = () => {
  const { videoTour } = useTour();

  return (
    <section className="video__tour">
      <div className="title">Sayohat videolari</div>
      <Swiper spaceBetween={20} 
      slidesPerView={2} 
      navigation 
      pagination={{ clickable: true }}
      loop={true} 
      modules={[Navigation, Pagination]}
      className="container">
        {videoTour.map((data, index) => (
          <SwiperSlide key={index}>          
            <div className="video__tour-box">
              <a href={data.video} target="_blank" rel="noopener noreferrer" className="video__tour-title">{data.name}</a>
              <a href={data.video} target="_blank" rel="noopener noreferrer" className="video__tour-video">
                <img src={data.youtube} alt="" className="video__tour-youtube" />
                <img src={data.img} alt={data.name} className="video__tour-thumb" />
                <div className="video__tour-overlay">
                  <span>{data.name} </span>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideoTour;

