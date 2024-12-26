import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTour } from "@/context/Context";
import { IoLocationSharp } from "react-icons/io5";
import icon2 from "@i/icon2.svg";
import icon3 from "@i/icon3.svg";
import icon4 from "@i/icon4.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./TravelLocation.scss";

const TravelLocation = () => {
  const { tourData } = useTour();
  const location = useLocation();
  const [filteredTourData, setFilteredTourData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    if (location.pathname === "/") {
      setFilteredTourData(tourData.slice(0, 8));
    } else if (location.pathname === "/travel") {
      setFilteredTourData(tourData); 
    }
  }, [tourData, location.pathname]);

  return (
    <section className="travel">
      <h2 className="title" data-aos="fade-up">Eng yaxshi ko&apos;p kunlik sayohatlar</h2>
      <div className="container">
        {filteredTourData.map((data) => (
          <div className="travel__box" key={data.id} data-aos="fade-up">
            <div className="travel__box-img" data-aos="zoom-in">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="travel__box-item">
              <h3 className="travel__box-title" data-aos="fade-up">{data.title}</h3>
              <p className="travel__box-text" data-aos="fade-up">{data.description}</p>
              <p className="travel__box-location" data-aos="fade-up">
                <IoLocationSharp className="icon" />
                {data.location}
              </p>
              <p className="travel__box-difficulty" data-aos="fade-up">
                <img src={icon3} alt="icon" />
                {data.difficulty}
              </p>
              <p className="travel__box-rating" data-aos="fade-up">
                <img src={icon2} alt="icon" />
                {data.date}
              </p>
              <div className="travel__price-all">
                <p className="travel__box-price" data-aos="fade-up">{data.price}</p>
                <Link 
                  to={`/travel-destination/${data.id}`} 
                  state={{ tourData: data }} 
                  data-aos="fade-up"
                >
                  <img src={icon4} alt="icon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
        {location.pathname === "/" && (
          <div className="travel__link-all">
            <Link to={"/travel"} className="travel__all" data-aos="fade-up">Barcha sayohatlarni ko'ring</Link>
          </div>
        )}
    </section>
  );
};

export default TravelLocation;
