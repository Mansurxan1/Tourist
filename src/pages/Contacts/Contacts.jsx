import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./Contacts.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",  // Telegram manzilini qo'shish
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("Yuborilyapti...");

    const message = `
      Yangi habar! \n
      Ism: ${formData.name} \n
      Telegram: ${formData.telegram} \n
      Xabar: ${formData.message}
    `;

    try {
      // Telegram API'ga so'rov yuborish
      const response = await axios.post(
        `https://api.telegram.org/bot7553458611:AAHn35z8HFus-GHIv-ZAm3k8nsXt9nrP90U/sendMessage`,
        {
          chat_id: "5283151626",  // Sizning chat ID
          text: message,
        }
      );

      if (response.data.ok) {
        setStatus("Xabar yuborildi!");
        setFormData({
          name: "",
          telegram: "",
          message: "",
        });
      } else {
        setStatus("Xabar yuborishda xato yuz berdi.");
      }
    } catch (error) {
      console.error("Telegram bot xatosi:", error);
      setStatus("Xabar yuborishda xato yuz berdi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="contact">
        <div className="container">
          <div className="contact__main" data-aos="fade-up">
            <h1>Biz Bilan Bog'laning</h1>
            <p className="contact__description">
              Agar sizda biron bir savol yoki taklif bo'lsa, quyidagi aloqa shakli orqali biz bilan bog'lanishingiz mumkin. Biz sizga yordam berishdan mamnun bo'lamiz!
            </p>
          </div>

          <section className="contact__details" data-aos="fade-left">
            <h2>Bizning Kontakt Ma'lumotlarimiz</h2>
            <p>
              <strong>SAKHTRAVEL TUR MChJ</strong><br />
              Yuridik manzil: O'zbekiston, Toshkent shahri, Toshkent city Mall<br />
              INN: 205926207<br />
              Telefon: <a href="tel:+998911382094"> +998 91 138 20 94</a><br />
              Telegram: <a href="http://t.me/mansurxan1" target="_blank" rel="noreferrer">Telegram orqali bog'laning</a><br />
              Email: <a href="mailto:info@sakhtravel.uz" target="_blank" rel="noopener noreferrer">info@sakhtravel.uz</a><br />
              Web: <a href="https://www.sakhtravel.uz" target="_blank" rel="noopener noreferrer">www.sakhtravel.uz</a>
            </p>
          </section>

          <section className="contact__form" data-aos="fade-up">
            <h2>Aloqa Formasi</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ismingiz</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ismingizni kiriting"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telegram">Telegram manzilingiz</label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="Telegram manzilingizni kiriting"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Xabar</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Xabarni yozing"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Yuborilyapti..." : "Yuborish"}
              </button>
            </form>
            {status && <p className="status">{status}</p>}
          </section>

          <section className="contact__map" data-aos="fade-right">
            <h2>Bizni Toping</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6637919729337!2d69.24985387656346!3d41.316177100408375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sTashkent%20City%20Mall!5e0!3m2!1suz!2s!4v1735031593767!5m2!1suz!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>

          <footer className="contact__footer" data-aos="zoom-in">
            <p>Biz bilan bog'laning va sayohatingizni boshlang!</p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Contact;
