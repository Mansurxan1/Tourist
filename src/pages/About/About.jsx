import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./About.scss"

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
    
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  return (
    <main>
      <section className="about">
        <div className="container">
          <div className="about__main" data-aos="fade-up">
            <h1>SakhTravel</h1>
            <p className="about__description">
              Kompaniya 2006 yilda tashkil etilgan va 14 yil davomida mijozlarga turli yo’nalishlarda sayohat qilish imkoniyatlarini taqdim etib kelmoqda.
            </p>
          </div>

          <section className="about__working-hours" data-aos="fade-left">
            <h2>Bizning Ish Grafigimiz</h2>
            <ul>
              <li><i className="about__circular-clock"></i> Dushanba-Jum 10:00-18:00</li>
              <li><i className="about__food"></i> Tanaffus: 13:00-14:00</li>
              <li><i className="about__home-icon-silhouette"></i> Dam olish kunlari: Shanba-Yakshanba</li>
            </ul>
          </section>

          <section className="about__services" data-aos="fade-up">
            <h2>Xizmatlarimiz</h2>
            <p>Biz turli yo’nalishlarda sayohat qilish uchun xizmatlar taqdim etamiz:</p>
            <ul>
              <li>Soglomlashtirish va plyaj dam olishlari</li>
              <li>Spa-kurortlar</li>
              <li>Ekzotik va ekstremal sayohatlar</li>
              <li>Individual va guruhli sayohatlarni tashkil etish</li>
            </ul>
          </section>

          <section className="company-info" data-aos="fade-right">
            <h2>Bizning Jamoa</h2>
            <p>
              <strong>SakhTravel</strong> jamoasi sayohat qilishni istagan har bir mijozga qulay aviaqatnovlar, eng yaxshi mehmonxonalar va dam olish joylari haqida maslahatlarga ega. Bizning maqsadimiz, har bir mijozga sifatli va esda qolarli dam olishni taqdim etishdir.
            </p>
          </section>

          <section className="contact-info" data-aos="fade-left">
            <h2>Kontaktlar va Rekvizitlar</h2>
            <p>
              <strong>TALISMAN TUR MChJ</strong><br />
              Yuridik manzil: Ozbekiston, Toshkent shahri, Toshkent city Mall<br />
              INN: 205926207
            </p>
          </section>

          <footer className="about__footer" data-aos="zoom-in">
            <p>Sizning sayohatingiz, bizning masuliyatimiz!</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6637919729337!2d69.24985387656346!3d41.316177100408375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sTashkent%20City%20Mall!5e0!3m2!1suz!2s!4v1735031593767!5m2!1suz!2s" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </footer>
        </div>
      </section>
    </main>
  );
};

export default About;
