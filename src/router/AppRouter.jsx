import { Route, Routes } from "react-router-dom"
import Home from "@/pages/Home/Home"
import TravelDestination from "@/pages/TravelDestination/TravelDestination"
import NewIdPage from "../pages/New/NewIdPage"
import Travel from "../pages/Travel/Travel"
import BestPage from "../pages/BestPage/BestPage"
import About from "../pages/About/About"
import Contacts from "../pages/Contacts/Contacts"
import Blog from "../pages/Blog/Blog"
import Hotel from "../pages/Hotel/Hotel"
import NotFound from "../404/404"
import BestIdPage from "../pages/BestId/BestId"
import NewsPage from "../pages/NewsPage/NewsPage"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/travel-destination/:id" element={<TravelDestination />} />
        <Route path="/travel-best/:id" element={<BestIdPage />}/>
        <Route path="/BestPage" element={<BestPage />}/>
        <Route path="/travel" element={<Travel />} />
        <Route path="/new/:id" element={<NewIdPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/hotel" element={<Hotel />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default AppRouter
