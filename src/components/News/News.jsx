import { Link, useLocation } from "react-router-dom";
import { useTour } from "../../context/Context";
import "./news.scss";
import next from "@i/next.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const News = () => {
  const { news } = useTour();
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1200 }); 
  }, []);

  return (
    <section className="news">
      <h2 className="title" data-aos="fade-right" data-aos-delay="100">Yangiliklar</h2>
      <div className="container">
        {news.map((data, index) => (
          <div className="news__box" key={index} data-aos="flip-left" data-aos-delay={index * 200}>
            <h2 className="news__box-title" data-aos="slide-up" data-aos-delay="300">{data.title}</h2>
            <div className="news__box-img" data-aos="flip-up" data-aos-delay="400">
              <img src={data.img} alt="" />
            </div>
            <p className="news__box-date" data-aos="fade-left" data-aos-delay="500">{data.date}</p>
            <p className="news__box-text" data-aos="fade-right" data-aos-delay="600">{data.text}</p>
            <Link to={`/new/${data.id}`} state={{ tourData: data }} data-aos="zoom-out" data-aos-delay="700">
              {data.in_detail} <span><img src={next} alt="" /></span>
            </Link>
          </div>
        ))}
      </div>
      {location.pathname !== "/news" && (
        <div className="news__box-all">
          <Link to={"/news"} className="news__btn" data-aos="zoom-in-up" data-aos-delay="1000">BARCHA YANGILIKLAR</Link>
        </div>
      )}
    </section>
  );
};

export default News;




