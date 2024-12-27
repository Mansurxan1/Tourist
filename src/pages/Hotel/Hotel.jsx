import { useEffect } from "react";
import Bed from "../../components/Bed/Bed"
import "./Hotel.scss"

const Hotel = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <section className="bedpages">
      <Bed />
      <h2>Tez kunlarda ...</h2>
    </section>
  )
}

export default Hotel
