import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./burger-menu.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger__container">
      <FontAwesomeIcon  className="burger" onClick={() => toggleMenu()} icon={faBars} />
      {isOpen && (
        <div className="bm__wrapper">
          <ul className="bm">
            <li className="bm__item">
              <NavLink className="bm__link" to="/">
                strona gołówna
              </NavLink>
            </li>
            <li className="bm__item">
              <NavLink className="bm__link" to="/produkty">
                produkty
              </NavLink>
            </li>
            {/* <li className="nav__item">
                    <NavLink className="nav__link" to="/gleria">galeria</NavLink>
                  </li> */}
            <li className="bm__item">
              <NavLink className="bm__link" to="/kontakt">
                kontakt
              </NavLink>
            </li>
            <li className="bm__item">
              <NavLink className="bm__link" to="/admin">
                admin
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
