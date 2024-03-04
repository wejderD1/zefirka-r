import { useState } from "react";
import "./categories-tabs.scss";
import TabItem from "../tab-item/tab-item";
import TabContent from "../tab-content/tab-content";

function CategoriesTabs() {
  const [activeTab, setActiveTab] = useState("s");
  const categories = ["f", "s", "t"];

  const tabItem = categories.map((el, i) => {
    return (
      <TabItem
        key={i}
        id={el}
        title={el}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  });

  const tabContent = categories.map((el, i) => {
    return (
      <TabContent key={i} id={el} activeTab={activeTab}>
        This is {i} tab
      </TabContent>
    );
  });

  return (
    <div className="tabs__container">
      <div className="tabs__inner">
        <ul className="tabs__nav">{tabItem}</ul>
        {tabContent}
      </div>
    </div>
  );
}

export default CategoriesTabs;
