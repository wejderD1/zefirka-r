import { useSelector } from "react-redux";
import "./tab-content.scss";

function TabContent({ id, children }) {
  const { activeCategory } = useSelector((state) => state);


  return activeCategory === id ? (
    <div className="tab__content">{children}</div>
  ) : null;
}

export default TabContent;
