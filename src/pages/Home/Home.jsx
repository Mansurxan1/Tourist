import { useEffect, useState } from "react";
import BestDayTours from "@/components/BestDayTours/BestDayTours";
import Header from "@/components/Header/Header";
import Ticket from "@/components/Ticket/Ticket";
import TravelLocation from "@/components/TravelLocation/TravelLocation";
import VideoTour from "@/components/VideoTour/VideoTour";
import Bed from "@/components/Bed/Bed";
import News from "@/components/News/News";
import TelegramCard from "@/components/TelegramCard/TelegramCard";
import TourTurizm from "@/components/TourTurizm/TourTurizm";
import Navigation from "@/components/Navigation/Navigation";
import Loader from "@/components/Loader/Loader"; 
import { useTour } from "@/context/Context"; 
import "./Home.scss"
import { useLocation } from "react-router-dom";

const Home = () => {
   const location = useLocation();
  const { newss, loading: contextLoading } = useTour(); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (!contextLoading) {
      setLoading(false); 
    }
  }, [contextLoading]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <main className="home-main">
          <Header />
          <main>
            <Ticket />
            <TravelLocation />
            <BestDayTours />
            <VideoTour />
            <Ticket />
            <Bed />
            <News />
            <TelegramCard />
            <TourTurizm />
            <Navigation />
          </main>
        </main>
      )}
    </>
  );
};

export default Home;
