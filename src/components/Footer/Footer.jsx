import './Footer.scss'
import footerLogo from "@i/footer-logo.png"
import card1 from "@i/card1.png"
import card2 from "@i/card2.png"
import { FaCcVisa } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaMoneyBillWave } from "react-icons/fa";
import { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up"> 
      <div className="container">
        <div className="footer__left" data-aos="fade-left">
          <Link to={"/"} className="footer__logo">
            <img src={footerLogo} alt="SakhTravel" className="footer__logo-img" />
          </Link>
          <div className="footer__contact">
          <p> Uzbekistan, Tashkent City Mall <span>
            <a href="https://www.google.com/maps?q=Tashkent+City+Mall" target="_blank" rel="noopener noreferrer" >Xarita korish </a>
            </span>
          </p>

            <a href="mailto:paygambarqulovmp@gmail.com" target="_blank" rel="noreferrer">paygambarqulovmp@gmail.com</a>
            <div className="footer__phones">
              <a href="tel:+998911382094">+998 91 138 20 94</a>
            </div>
          </div>
        </div>

        <nav className="footer__nav" data-aos="fade-up">
          <Link to={"/"}>Bosh Sahifa</Link>
          <Link to={"/news"}>Yangiliklar</Link>
          <Link to={"/about"}>Biz haqimizda</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contacts"}>Kontakt</Link>
          <div className="footer__social">
            <a href="https://wa.me/+998911382094" target="_blank" className="social-icon" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="tel:+998911382094" target='_blank' className="social-icon" rel="noopener noreferrer"><FaPhoneVolume/></a>
            <a href="https://T.me//Mansurxan1" target='_blank' className="social-icon" rel="noopener noreferrer"><FaTelegramPlane /></a>
          </div>
        </nav>

        <div className="footer__right" data-aos="fade-right">
          <h4>To'lov Turlari</h4>
          <div className="footer__payment" data-aos="zoom-in">
            <span><img src={card1} alt="" /></span>
            <span><img src={card2} alt="" /></span>
            <span><FaMoneyBillWave color='green' /></span>
            <span><FaCcVisa /></span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p> TURIZM veb-saytini yaratish</p>
        <p>© “SakhTravel” barcha huquqlar himoyalangan, 2025 yil</p>
      </div>
    </footer>
  )
}

export default Footer;
