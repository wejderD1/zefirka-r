import { Link, NavLink } from "react-router-dom";
import "./header-app.scss";

const HeaderApp = ({ links }) => {
  const linksItems = links.map((item, i) => {
    return (
      <li className="nav__item" key={i}>
        <NavLink
          activeClass={{ color: "red" }}
          to={item === "strona gołówna" ? "/" : item}
          className="nav__link"
        >
          {item}
        </NavLink>
      </li>
    );
  });
  return (
    <header className="App-header">
      <div className="container">
        <div id="nav-wrapper">
          <Link className="logo md" alt="zefirka logo" to="/"></Link>
          <ul className="nav">{linksItems}</ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
