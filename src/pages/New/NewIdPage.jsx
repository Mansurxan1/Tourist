import { useParams, useLocation } from 'react-router-dom';
import { useTour } from "@/context/Context";
import "./NewIdPage.scss"
import { useEffect } from 'react';

const NewIdPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  const { id } = useParams();
  const location = useLocation();
  const { news } = useTour();

  console.log("ID:", id);
  console.log("Location state:", location.state);
  console.log("Tour data from context:", news);

  const selectedTour = location.state?.news || news.find(tour => tour.id === parseInt(id));

  console.log("Selected tour:", selectedTour);

  if (!selectedTour) {
    return <div className="travel-destination__not-found">Ma'lumot kelmadi</div>;
  }

  return (
    <section className="travel-destination">
      <div className="container">
        <div className="travel-destination__content">
          <h2 className="travel-destination__title">{selectedTour.title}</h2>
          <img src={selectedTour.img} alt={selectedTour.title} className="travel-destination__image" />
          <p className="travel-destination__description">{selectedTour.description}</p>
          <div className="travel-destination__details">
            <p> {selectedTour.date}</p>
            <p> {selectedTour.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewIdPage;

