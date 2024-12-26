import { useState, useEffect } from 'react';
import './navbar.scss';
import logo from "@i/logo.png";
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'; 

const Navbar = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  const [showCatalog, setShowCatalog] = useState(false); 
  const [bgColor, setBgColor] = useState('transparent'); 

  const handleCatalogClick = () => {
    setShowCatalog(prev => !prev);
      if (!showCatalog) {
        document.body.style.overflow = 'hidden';
        window.scrollTo({ top: 100, behavior: 'smooth' }); 
      } else {
        document.body.style.overflow = 'auto';
      }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('#fff'); 
    } else {
      setBgColor(showCatalog ? '#fff' : '#ffffff10');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showCatalog]);

  return (
    <nav className="navbar" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="navbar__top">
          <Link to={"/"} className="navbar__logo">
            <img src={logo} alt="Logo" className="navbar__logo-img"/>
          </Link>
          <div className="navbar__links">
            <Link to={"/about"} className="navbar__links-item">BIZ HAQIMIZDA</Link>
            <Link to={"/blog"} className="navbar__links-item">BLOG</Link>
            <Link to={"/news"} className="navbar__links-item">YANGILIKLAR</Link>
            <Link to={"/contacts"} className="navbar__links-item">KONTAKTLAR</Link>
          </div>
          <div className="navbar__right">
            <a href="tel:+998911382094" className="navbar__right-phone">
              +998 91 138 20 94
            </a>
            <button className="navbar__right-btn" onClick={handleCatalogClick}>
              KATALOG
            </button>
          </div>
        </div>
        

        {showCatalog && <Navigation />}
      </div>
    </nav>
  );
};

export default Navbar;

