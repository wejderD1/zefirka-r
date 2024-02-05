import "./contacts-view.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ContactsView = () => {
  return (
    <div className="contacts pt-115px">
      <div className="container">
        <div className="contacts_inner">
          <h1 className="subtitle_bottom-line">Moje kontakty</h1>
          <h1 className="main-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos
            adipisci alias voluptas eaque itaque esse quos odio libero
            reprehenderit, eveniet eius. Sit accusantium quo vitae dolorum
            delectus. Tempora, iste!
          </h1>
          <div className="contacts_block">
            <p className="main-text contacts_item tt-uppercase">
              +48-517-563-983
            </p>
            <p className="main-text contacts_item tt-uppercase">
              zefirka.wiolet@gmail.com
            </p>
            <p className="main-text contacts_item tt-uppercase">
              zamówić onlain tu
            </p>
          </div>
          <h1 className="main-text">97-500, Radomsko, Polska</h1>
          <div className="social-container">
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
          <div className="email_block">
            {/* к форме нужно написать обработчик события */}
            <form>
              <h1 className="subtitle">Masz pytanie</h1>
              <div className="email_wrap">
                <input
                  id="fName"
                  className="main-input"
                  type="text"
                  v-model="clientData.fName"
                  placeholder="imię"
                />
                <input
                  id="email"
                  className="main-input"
                  type="email"
                  v-model="clientData.email"
                  placeholder="email"
                />
                <input
                  id="telefon"
                  className="main-input"
                  type="text"
                  v-model="clientData.telefon"
                  placeholder="telefon"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="300"
                  rows="40"
                  className="main-input comments"
                  placeholder="treść zapytania"
                  v-model="clientData.message"
                ></textarea>
                <input
                  className="main-input"
                  value="modelValue"
                  name="email"
                  id="email"
                  placeholder="e-mail"
                  type="email"
                />
                <input
                  type="tel"
                  name="telefon"
                  id="telefon"
                  placeholder="telefon"
                />

                <Link className="btn-contacts" to="/">
                  wysłać
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsView;
