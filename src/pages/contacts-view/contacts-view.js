import "./contacts-view.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ContactsView = () => {
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
            <a href="#" className="social-links">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-links">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-links">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="social-links">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <h1 className="subtitle subtitle_bottom-line">Masz pytanie</h1>

          {/* к форме нужно написать обработчик события */}
          <form className="email_block">
            <div className="email_wrap-item">
              <input
                id="fName"
                className="main-input"
                type="text"
                placeholder="imię"
              />
              <input
                id="email"
                className="main-input"
                type="email"
                placeholder="email"
              />
              <input
                id="telefon"
                className="main-input"
                type="text"
                placeholder="telefon"
              />
              <Link className="btn btn_contacts" to="/">
                wysłać
              </Link>
            </div>
            <textarea
              name="message"
              id="message"
              rows="40"
              className="main-input comments"
              placeholder="treść zapytania"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsView;
