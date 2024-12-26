import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { TourProvider } from "./context/Context"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <TourProvider >
      <BrowserRouter>
        <Navbar/>
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </TourProvider>
  )
}

export default App
