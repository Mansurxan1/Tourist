import { useParams, useLocation } from 'react-router-dom';
import { useTour } from "@/context/Context";
import "./NewIdPage.scss"

const NewIdPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { news } = useTour();

  console.log("ID:", id);
  console.log("Location state:", location.state);
  console.log("Tour data from context:", news);

  const selectedTour = location.state?.news || news.find(tour => tour.id === parseInt(id));

  console.log("Selected tour:", selectedTour);

  if (!selectedTour) {
    return <div className="travel-destination__not-found">Тур не найден</div>;
  }

  return (
    <section className="travel-destination">
      <div className="travel-destination__content">
        <h2 className="travel-destination__title">{selectedTour.title}</h2>
        <img src={selectedTour.img} alt={selectedTour.title} className="travel-destination__image" />
        <p className="travel-destination__description">{selectedTour.description}</p>
        <div className="travel-destination__details">
          <p><strong>Местоположение:</strong> {selectedTour.location}</p>
          <p><strong>Сложность:</strong> {selectedTour.difficulty}</p>
          <p><strong>Дата:</strong> {selectedTour.date}</p>
          <p><strong>Цена:</strong> {selectedTour.price}</p>
        </div>
      </div>
    </section>
  );
};

export default NewIdPage;

