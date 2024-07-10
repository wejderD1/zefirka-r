import { Link, NavLink } from "react-router-dom";
import "./header-app.scss";
import BurgerMenu from "../burger-menu/burger-menu";
import { useEffect, useState } from "react";

const HeaderApp = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos === 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  return (
    <header className={`app-header ${ !visible ? "app-header_show" : ""}`}>
      <div className="container">
        <BurgerMenu />
        <div className="nav__wrapper">
          <Link className={`logo ${ !visible ? "logo_active" : ""}`} alt="zefirka logo" to="/"></Link>
          <ul className="nav">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                strona gołówna
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/produkty">
                produkty
              </NavLink>
            </li>
            {/* <li className="nav__item">
              <NavLink className="nav__link" to="/gleria">galeria</NavLink>
            </li> */}
            <li className="nav__item">
              <NavLink className="nav__link" to="/kontakt">
                kontakt
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/admin">
                admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
