import { useState } from "react";
import "./categories-tabs.scss";

function CategoriesTabs() {
  const [activeTab, setActiveTab] = useState("third");
  const categories = ["first", "second", "third"];

  const onToggleTab = () => {
    setActiveTab("tab3");
  }

  const tabItem = categories.map((el, i) => {
    return (
      <li 
        className={activeTab === el ? "tabs__item item_active" : "tabs__item"}
        onClick={onToggleTab}
      >{el}</li>
    )
  })

  return ( 
    <div className="tabs__container">
      <div className="tabs__inner">
        <ul className="tabs__nav">
          {tabItem}
        </ul>
      </div>
    </div>
   );
}

export default CategoriesTabs;