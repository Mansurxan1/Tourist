import "./Bed.scss"
import { useTour } from "@/context/Context";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Bed = () => {
  const { bed } = useTour(); 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bed" data-aos="fade-up" data-aos-delay="200">
      <h2 className="title" data-aos="fade-up" data-aos-delay="300">Mehmonxonalar</h2>
      <div className="container">
        {bed.map((data, index) => (
          <div className="bed__box" key={index} data-aos="fade-up" data-aos-delay="400">
            <Link to={"/hotel"} href="#" data-aos="zoom-in" data-aos-delay="500">{data.address} 
              <div className="bed__box-img" data-aos="zoom-in" data-aos-delay="600">
                <img src={data.img} alt="" />
              </div>
            </Link> 
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bed;
