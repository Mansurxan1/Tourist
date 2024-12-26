import TravelLocation from "../../components/TravelLocation/TravelLocation"
import "./Travel.scss"

const Travel = () => {
  return (
    <section className="travel__page">
        <div className="container">
            <TravelLocation />
        </div>
    </section>
  )
}

export default Travel