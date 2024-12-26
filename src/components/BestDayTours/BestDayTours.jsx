import { useEffect } from 'react';
import { useTour } from "@/context/Context";
import { IoLocationSharp } from "react-icons/io5";
import icon2 from "@i/icon2.svg";
import icon3 from "@i/icon3.svg";
import icon4 from "@i/icon4.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation, } from "react-router-dom";
import "./BestDayTours.scss";

const BestDayTours = () => {
  const { bestDayTours } = useTour();
  const location = useLocation(); 

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="bestpage">
      <h2 className="title" data-aos="fade-up">Mashhur sayohatlar</h2>
      <div className="container">
        {bestDayTours.map((data, index) => (
          <div className="bestpage__box" key={index} data-aos="fade-top">
            <div className="bestpage__box-img" data-aos="zoom-in">
              <img src={data.image} alt="data-img" />
            </div>
            <div className="bestpage__box-item">
              <h3 className="bestpage__box-title" data-aos="fade-up">{data.title}</h3>
              <p className="bestpage__box-text" data-aos="fade-up">{data.description}</p>
              <p className="bestpage__box-location" data-aos="fade-up">
                <IoLocationSharp className="icon" />
                {data.location}
              </p>
              <p className="bestpage__box-difficulty" data-aos="fade-up">
                <img src={icon3} alt="icon" />
                {data.difficulty}
              </p>
              <p className="bestpage__box-rating" data-aos="fade-up">
                <img src={icon2} alt="icon" />
                {data.date}
              </p>
              <div className="bestpage__price-all">
                <p className="bestpage__box-price" data-aos="fade-right">{data.price}</p>
                <Link
                  to={`/travel-best/${data.id}`}
                  state={{ tourData: data }}
                  data-aos="fade-left"
                >
                  <img src={icon4} alt="icon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {location.pathname !== "/BestPage" && (
        <div className="bestpage__link-all">
          <Link to={"/BestPage"} className="bestpage__all" data-aos="fade-up">Barcha sayohatlarni ko'ring</Link>
        </div>
      )}
    </section>
  );
};

export default BestDayTours;
