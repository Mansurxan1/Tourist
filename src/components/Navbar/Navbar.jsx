import { useState, useEffect } from 'react';
import './navbar.scss';
import logo from "@i/logo.png";
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [showCatalog, setShowCatalog] = useState(false); 
  const [showMenu, setShowMenu] = useState(false); 
  const [bgColor, setBgColor] = useState('transparent');
  const [isOpen, setIsOpen] = useState(false); // Add state for hamburger menu
  
  const handleCatalogClick = () => {
    setShowCatalog(prev => !prev);
    if (!showCatalog) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 100, behavior: 'smooth' }); 
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleHamburgerClick = () => {
    setIsOpen(prev => !prev); // Toggle hamburger menu
    if (showMenu) {
      setShowMenu(false);
      setTimeout(() => {
        document.body.style.overflow = 'auto'; 
      }, 500);
    } else {
      setShowMenu(true);
      document.body.style.overflow = 'hidden';
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showCatalog]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } 
  }, [showMenu]);

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setShowMenu(false);
    setIsOpen(false);
  };

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
          <label className="navbar__hamburger" htmlFor="burger">
            <input 
              type="checkbox" 
              id="burger" 
              checked={isOpen}
              onChange={handleHamburgerClick}
            />
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
          </label>
        </div>

        <div 
          className={`navbar__mobile-menu ${showMenu ? 'show' : 'none'}`} 
          data-aos="slide-down" 
        >
          <Link to={"/"} className="navbar__links-item" onClick={handleLinkClick}>BOSH SAHIFA</Link>
          <Link to={"/about"} className="navbar__links-item" onClick={handleLinkClick}>BIZ HAQIMIZDA</Link>
          <Link to={"/blog"} className="navbar__links-item" onClick={handleLinkClick}>BLOG</Link>
          <Link to={"/news"} className="navbar__links-item" onClick={handleLinkClick}>YANGILIKLAR</Link>
          <Link to={"/contacts"} className="navbar__links-item" onClick={handleLinkClick}>KONTAKTLAR</Link>
        </div>

        {showCatalog && <Navigation />}
      </div>
    </nav>
  );
};

export default Navbar;
