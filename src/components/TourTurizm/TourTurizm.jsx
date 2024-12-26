import './TourTurizm.scss';
import { useTour } from '@/context/Context';

const TourTurizm = () => {
  const { tourTurizm } = useTour()
  return (
    <section className="tour__turizm">
      {tourTurizm.map((data, index) => ( 
      <div className="container" key={index}>
          <h2 className="tour__turizm-title">{data.title}</h2>
          <p className="tour__turizm-description">{data.description}</p>
          <h3 className="tour__turizm-title">{data.title2}</h3>
          <p className="tour__turizm-text">{data.description2}</p>
      </div>
      ))}
    </section>
  );
};

export default TourTurizm;
