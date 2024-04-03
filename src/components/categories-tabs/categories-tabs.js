import { useCallback, useEffect, useState } from "react";
import "./categories-tabs.scss";
import TabItem from "../tab-item/tab-item";
import TabContent from "../tab-content/tab-content";
import ProductCard from "../product-card/product-card";

function CategoriesTabs({ contents, categoriesName }) {
  const [activeTab, setActiveTab] = useState(categoriesName[0]);
  const categories = categoriesName;
  const [productsCards, setProductsCards] = useState([])

  useEffect(() => {
    const filterArr = contents.filter((filter) => filter.category === activeTab)

    const productsCards = filterArr.map((e, i) => {
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
  }, [activeTab]);

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
          {productsCards}
        </div>
      </TabContent>
    );
  });

  /**
   * create grid template collumns style
   */
  const createGridTemplateStyle = useCallback(() => {
    let str = "";
    for (let index = 0; index < categoriesName.length; index++) {
      str += "1fr ";        
    }
    return str;
  }, [categoriesName])

  return (
    <div className="tabs__container">
      <div className="tabs__inner">
        <ul 
          className="tabs__nav"
          style={{ gridTemplateColumns: createGridTemplateStyle() }}
        >{tabItem}</ul>
        {tabContent}
      </div>
    </div>
  );
}

export default CategoriesTabs;
