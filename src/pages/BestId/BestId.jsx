import { useLocation } from "react-router-dom";
import "./BestId.scss";

const BestIdPage = () => {
  const { state } = useLocation(); 
  const { tourData } = state || {}; 

  if (!tourData) {
    return <div className="best-page__not-found">Sayohatlar topilmadi</div>;
  }

  return (
    <section className="best-page">
      <div className="container">
        <div className="best-page__content">
          <h1 className="best-page__title">{tourData.title}</h1>
          <div className="best-page__box">
            <img src={tourData.image} alt={tourData.title} className="best-page__image" />
            <div className="best-page__details">
              <p><strong>Sayohat manzili:</strong> {tourData.location}</p>
              <p><strong>Biz bilan sayohat qilish orqali:</strong> {tourData.difficulty}</p>
              <p><strong>Sayohat kunlari:</strong> <span>{tourData.date.join(", ")}</span></p>
              <p><strong>Narxi:</strong> {tourData.price}</p>
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
