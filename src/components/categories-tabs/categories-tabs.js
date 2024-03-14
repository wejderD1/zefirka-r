import { useEffect, useState } from "react";
import "./categories-tabs.scss";
import TabItem from "../tab-item/tab-item";
import TabContent from "../tab-content/tab-content";
import ProductCard from "../product-card/product-card";

function CategoriesTabs({ contents, categoriesName }) {
  const [activeTab, setActiveTab] = useState("s");
  const categories = categoriesName;
  const [productsCards, setProductsCards] = useState([])

  useEffect(() => {
    const productsCards = contents.map((e, i) => {
      return (
        <ProductCard
          key={i}
          title={e.pTitle}
          desc={e.pDescription}
          price={e.pPrice}
          img={e.pImg}
        />
      );
    });

    setProductsCards(productsCards);
  }, [contents]);

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
        <div className="products-wrapper">
          Tab {i}
          {productsCards}
        </div>
      </TabContent>
    );
  });

  return (
    <div className="tabs__container">
      <div className="tabs__inner">
        <ul 
          className="tabs__nav"
          style={ {gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr" }}
        >{tabItem}</ul>
        {tabContent}
      </div>
    </div>
  );
}

export default CategoriesTabs;
