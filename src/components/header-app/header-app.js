import { Link, NavLink } from "react-router-dom";
import "./header-app.scss";
import { useEffect } from "react";

const HeaderApp = ({ links }) => {

  // const linksItems = links.map((item, i) => {
  //   return (
  //     <li className="nav__item" key={i}>
  //       <NavLink
  //         to={item}
  //         // to={item === "strona gołówna" ? "/" : item}
  //         className="nav__link"
  //       >
  //         {item}
  //       </NavLink>
  //     </li>
  //   );
  // });


  return (
    <header className="app-header">
      <div className="container">
        <div className="nav__wrapper">
          <Link className="logo" alt="zefirka logo" to="/"></Link>
          {/* <ul className="nav">{linksItems}</ul> */}
          <ul className="nav">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">strona gołówna</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/produkty">produkty</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/gleria">galeria</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/kontakt">kontakt</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/admin">admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
