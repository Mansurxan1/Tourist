import { useEffect } from "react";
import "./NewsPage.scss"
import News from '@/components/News/News'

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <section className="news__page">
        <News  />
    </section>
  )
}

export default NewsPage