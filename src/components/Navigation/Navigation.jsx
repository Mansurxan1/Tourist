import { Link } from 'react-router-dom';
import './navigation.scss';
import AOS from 'aos';  
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const Navigation = () => {
  const sections = [
    {
      title: 'SAYOHAT TURLARI',
      items: [
        'Vip sayohatlar',
        'Vertalyot Sayohatlari',
        'Dengiz sayohatlari',
        'Qorda yuradigan sayohatlar',
      ],
    },
    {
      title: 'SAYOHAT TANLOV',
      items: [
        "Foto sayohatlar",
        "Ko'p kunlik sayohatlar",
        "Yozgi sayohatlari",
        "Pensionerlar uchun sayohatlar",
        'Daryoda rafting sayohatlari',
      ],
    },
    {
      title: "MAVSUMIY",
      items: [
        "Qish",
        "Bahor",
        "Yoz",
        "Kuz",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="navigation">
      <div className="container">
        <div className="navigation__content-grid">
          {sections.map((section) => (
            <div key={section.title} className="section" data-aos="fade-up"> 
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item} data-aos="fade-left"> 
                    <Link to={"/"}>{item}</Link>
                  </li>
                ))}
              </ul>
              <Link to={"/"} className="navigation__show-more" data-aos="fade-up">
                BATAFSIL MA'LUMOT
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
