import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Ticket.scss';

const Ticket = () => {
  const [tourType, setTourType] = useState('any');
  const [durationFrom, setDurationFrom] = useState('');
  const [durationTo, setDurationTo] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const [modalMessage, setModalMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!durationFrom || !durationTo) {
      setModalMessage('Iltimos, davomiylikni tanlang!');
      setShowModal(true);
      return;
    }

    if (!startDate) {
      setModalMessage('Iltimos, sayohat boshlanish sanasini tanlang!');
      setShowModal(true);
      return;
    }

    if (durationFrom && durationTo && startDate) {
      setModalMessage('Sayohat topilmadi, iltimos boshqa kunlarni tanlang.');
      setShowModal(true);
      return;
    }

    console.log('Qidiruv:', { tourType, durationFrom, durationTo, startDate });
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <section className="tour-search">
      <div className="container">
        <h2 className="tour-search__title">Sayohatni qidiring</h2>
        <form className="tour-search__form" onSubmit={handleSubmit}>
          <div className="tour-search__group">
            <label className="tour-search__group-label">Sayohat turi</label>
            <select
              className="tour-search__select"
              value={tourType}
              onChange={(e) => setTourType(e.target.value)}
            >
              <option value="any">Barchasi</option>
              <option value="adventure">Sarguzashtlar</option>
              <option value="relaxation">Dam olish</option>
              <option value="cultural">Madaniy</option>
            </select>
          </div>

          <div className="tour-search__group">
            <label className="tour-search__group-label">Davomiyligi</label>
            <div className="tour-search__group-duration">
              <select
                className="tour-search__select"
                value={durationFrom}
                onChange={(e) => setDurationFrom(e.target.value)}
              >
                <option value="">Kundan</option>
                <option value="3">3 kun</option>
                <option value="5">5 kun</option>
                <option value="7">7 kun</option>
              </select>
              <select
                className="tour-search__select"
                value={durationTo}
                onChange={(e) => setDurationTo(e.target.value)}
              >
                <option value="">Kungacha</option>
                <option value="5">5 kun</option>
                <option value="7">7 kun</option>
                <option value="14">14 kun</option>
              </select>
            </div>
          </div>

          <div className="tour-search__group">
            <label className="tour-search__group-label">Sayohatni boshlanish sanasi</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd.MM.yyyy"
              className="tour-search__datepicker"
              placeholderText="Sanani tanlang"
            />
          </div>

          <button type="submit" className="tour-search__button">
            Qidirish
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button className="modal-close" onClick={closeModal}>Orqaga</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ticket;
