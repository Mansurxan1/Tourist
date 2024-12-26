import { useLocation } from 'react-router-dom';
import "./TravelDestination.scss"
import { useEffect } from 'react';

const TravelDestination = () => {
  const location = useLocation();
  const { tourData } = location.state || {}; 

  if (!tourData) {
    return <div>Sayohat malumotlari topilmadi.</div>;
  }
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])

  return (
    <section className="travel__destination">
      <h2 className='title'>{tourData.title}</h2>
      <div className="container">
      <div className="travel__destination-content">
          <div className="travel__destination-box">
            <img src={tourData.image} alt={tourData.title} className="travel__destination-image" />
            <div className="travel__destination-detail">
              <p><strong>Sayohat manzili:</strong> <br />{tourData.location}</p>
              <p><strong>Biz bilan sayohat qilish orqali:</strong> <br /><br/> {tourData.difficulty}</p>
              <p><strong>Sayohat kunlari:</strong> <br /> <span>{tourData.date.join(", ")}</span></p>
              <p><strong>Narxi:</strong> <br /> {tourData.price} $</p>
            </div>
          </div>
          <h2 className="travel__destination-description">{tourData.description}</h2>
          <div className="travel__destination-places">
            <ul className="travel__destination-list">
              {tourData.places?.map((place, index) => (
                <li key={place.id} className="travel__destination-place">
                  <div className={`travel__destination-details ${index % 2 === 0 ? 'right' : 'left'}`}>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                  </div>
                  <img src={place.img} alt={place.name} className={`travel__destination-image ${index % 2 === 0 ? 'left' : 'right'}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDestination;




