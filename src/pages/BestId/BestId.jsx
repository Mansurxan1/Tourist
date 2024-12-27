import { useLocation } from "react-router-dom";
import "./BestId.scss";
import { useEffect } from "react";

const BestIdPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  const { state } = useLocation(); 
  const { tourData } = state || {}; 

  if (!tourData) {
    return <div className="best-page__not-found">Sayohatlar topilmadi</div>;
  }

  return (
    <section className="best-page">
      <h1 className="title">{tourData.title}</h1>
      <div className="container">
        <div className="best-page__content">
          <div className="best-page__box">
            <img src={tourData.image} alt={tourData.title} className="best-page__image" />
            <div className="best-page__details">
              <p><strong>Sayohat manzili:</strong> <br />{tourData.location}</p>
              <p><strong>Biz bilan sayohat qilish orqali:</strong> <br /><br/> {tourData.difficulty}</p>
              <p><strong>Sayohat kunlari:</strong> <br /> <span>{tourData.date.join(", ")}</span></p>
              <p><strong>Narxi:</strong> <br /> {tourData.price}</p>
            </div>
          </div>
          <h2 className="best-page__description">{tourData.description}</h2>
          <div className="best-page__places">
            <ul className="best-page__places-list">
              {tourData.places?.map((place, index) => (
                <li key={place.id} className="best-page__place">
                  <div className={`best-page__place-details ${index % 2 === 0 ? 'right' : 'left'}`}>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                  </div>
                  <img src={place.img} alt={place.name} className={`best-page__place-image ${index % 2 === 0 ? 'left' : 'right'}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestIdPage;
