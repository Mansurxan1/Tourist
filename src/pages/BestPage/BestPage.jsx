import BestDayTours from '@/components/BestDayTours/BestDayTours'
import "./BestPage.scss"
import { useEffect } from 'react';

const BestPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <article className='bestday__page'>
        <BestDayTours />
    </article>
  )
}

export default BestPage