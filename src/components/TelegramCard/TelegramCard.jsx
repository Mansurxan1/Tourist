import { useTour } from '../../context/Context';
import './TelegramCard.scss';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TelegramCard = () => {
  const handleSubscribe = () => {
    window.open('https://t.me/Mansurxan1', '_blank')
  }

  const { telegramCard } = useTour();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <section className="telegram__card">
      {telegramCard.map((data, index) => (
        <div className="container" key={index} data-aos="fade-up">
          <div className="telegram__card-qr" data-aos="zoom-in" data-aos-delay="200">
            <div className="telegram__card-qrk">
              <img src={data.img} alt="QR" />
            </div>
            <div className="telegram__card-handle">
              <a href={`http://t.me/${data.tg_address}`} target="_blank" rel="noopener noreferrer">
                @ {data.tg_address}
              </a>
            </div>
          </div>
          <div className="telegram__card-content">
            <h2 className="telegram__card-title" data-aos="fade-up" data-aos-delay="300">
              {data.title}
            </h2>
            <p className="telegram__card-description" data-aos="fade-up" data-aos-delay="400">
              {data.text}
            </p>
            <button className="telegram__card-button" onClick={handleSubscribe} data-aos="fade-up" data-aos-delay="500">
              Telegramga O'tish
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TelegramCard;

