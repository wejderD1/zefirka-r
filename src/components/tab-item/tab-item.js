import { useDispatch, useSelector } from "react-redux";
import {categoriesChanged} from "../../actions";

import "./tab-item.scss";

function TabItem({ id, title}) {
  const { activeCategory } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch()

  const onToggleTab = () => {
    dispatch(categoriesChanged(id))
  };

  return (
    <li
      key={id}
      className={`tabs__item ${activeCategory === title ? " item_active" : ""}`}
      onClick={onToggleTab}
    >
      {title}
    </li>
  );
}

export default TabItem;
