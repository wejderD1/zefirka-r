import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./selected-menu.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { categoriesChanged } from "../../actions";

function SelectedMenu({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const { activeCategory } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const onToggleTab = (category) => {
    dispatch(categoriesChanged(category));
    toggleIsOpen()
  };

  const items = menuItems.map((category, index) => (
    <li
      className="menu__item"
      onClick={() => onToggleTab(category)}
      key={index}
    >
      {category}
    </li>
  ));

  return (
    <div className="menu__container">
      <button className="menu__btn" onClick={() => toggleIsOpen()}>
        {activeCategory}
        <FontAwesomeIcon className="btn__icon" icon="fa-solid fa-caret-down" />
      </button>
      {isOpen && <ul className="menu__wrapper">{items}</ul>}
    </div>
  );
}

export default SelectedMenu;
