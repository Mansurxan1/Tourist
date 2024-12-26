import { useLocation } from 'react-router-dom';

const TravelDestination = () => {
  const location = useLocation();
  const { tourData } = location.state || {}; // Sayohat malumotlarini olish

  if (!tourData) {
    return <div>Sayohat ma'lumotlari topilmadi.</div>;
  }

  return (
    <section className="travel-destination">
      <h2>{tourData.title}</h2>
      <img src={tourData.image} alt={tourData.title} />
      <p>{tourData.description}</p>
      <p>{tourData.location}</p>
      <p>{tourData.difficulty}</p>
      <p>{tourData.date}</p>
      <p>{tourData.price}</p>
    </section>
  );
};

export default TravelDestination;




