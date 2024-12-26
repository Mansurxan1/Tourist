import BestDayTours from "@/components/BestDayTours/BestDayTours"
import Header from "@/components/Header/Header"
import Ticket from "@/components/Ticket/Ticket"
import TravelLocation from "@/components/TravelLocation/TravelLocation"
import VideoTour from "@/components/VideoTour/VideoTour"
import Bed from "@/components/Bed/Bed"
import News from "@/components/News/News"
import TelegramCard from "@/components/TelegramCard/TelegramCard"
import TourTurizm from "@/components/TourTurizm/TourTurizm"
import Navigation from "@/components/Navigation/Navigation"
import { useEffect } from "react"

const Home = () => {
  
  useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [])
  return (
    <>
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
    </>
  )
}

export default Home
