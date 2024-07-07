import { useState } from "react";
import "./contacts-view.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

import { useHttp } from "../../services/http.hooks";

const ContactsView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { request } = useHttp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    request(
      "http://localhost:5000/send-email",
      "POST",
      JSON.stringify({ name, email, phone, message })
    )
      .then(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        alert("your message has been sent");
      })
      .catch((error) => console.error("Error: " + error));
  };

  return (
    <div className="contacts pt-115px">
      <div className="container">
        <div className="contacts_inner">
          <h1 className="subtitle subtitle_bottom-line">Kontakty</h1>
          <h1 className="main-text">
            Stworzymy Razem Wyjątkowy Smak: Znajdź Naszą Ścieżkę Kontaktu
          </h1>
          <div className="contacts_block">
            <p className="main-text contacts_item tt-uppercase">
              +48-517-563-983
            </p>
            <p className="main-text contacts_item tt-uppercase">
              zefirka.wiolet@gmail.com
            </p>
          </div>
          <h1 className="main-text">97-500, Radomsko, Polska</h1>
          <div className="social-container padding-bottom_40">
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

          {/* к форме нужно написать обработчик события */}
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
                placeholder="000-000-000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button className="btn btn_contacts" type="submit">
                wysłać
              </button>
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
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsView;
