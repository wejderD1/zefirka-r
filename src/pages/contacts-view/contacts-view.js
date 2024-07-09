import { useState } from "react";
import "./contacts-view.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { useHttp } from "../../services/http.hooks";

const ContactsView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { request } = useHttp();

  const handleSubmit = (e) => {
    e.preventDefault();

    request(
      "http://localhost:5000/send-email",
      "POST",
      JSON.stringify({ name, email, phone, message })
    )
      .then(() => {
        toast.success("your letter has been sent");

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => toast.error(`Error: ${error}`));
  };

  return (
    <div className="contacts-page">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="contacts__header">
        <h1 className="main-title">Kontakty</h1>
        <h1 className="main-text contacts__info">
          Stworzymy Razem Wyjątkowy Smak: Znajdź Naszą Ścieżkę Kontaktu
        </h1>
      </div>
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__block">
            <h2 className="main-text contacts__item">+48-517-563-983</h2>
            <h2 className="main-text contacts__item">
              zefirka.wiolet@gmail.com
            </h2>
            <h1 className="main-text contacts__item">
              97-500, Radomsko, Polska
            </h1>
          </div>
          <div className="social-container pb-40">
            <Link to="#" className="social-links">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#" className="social-links">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="social-links">
              <i className="fab fa-tiktok"></i>
            </Link>
            <Link to="#" className="social-links">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>

          <h1 className="subtitle subtitle_bottom-line">Masz pytanie</h1>

          <form className="email_block" onSubmit={handleSubmit}>
            <div className="email_wrap-item">
              <input
                id="name"
                className="main-input"
                type="text"
                placeholder="imię"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                id="email"
                className="main-input"
                type="email"
                placeholder="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="telefon"
                className="main-input"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                required
                placeholder="tel: 000-000-000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              name="message"
              id="message"
              rows="40"
              className="main-input comments"
              placeholder="treść zapytania"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn__contacts" type="submit">
              wysłać
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsView;
