import { useCallback, useEffect } from "react";
import "./categories-tabs.scss";
import TabItem from "../tab-item/tab-item";
import TabContent from "../tab-content/tab-content";
import ProductCard from "../product-card/product-card";

import { setDefaultCategory } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function CategoriesTabs({ categoriesName }) {
  const categories = categoriesName;

  const { filteredProductsList } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDefaultCategory(categoriesName[0]));
  }, [])

  const productsCards = filteredProductsList.map((e) => {
    return (
      <ProductCard
        key={e.id}
        id={e.id}
        title={e.pTitle}
        desc={e.pDescription}
        price={e.pPrice}
        img={e.pImg}
      />
    );
  });

  const tabItem = categories.map((el, i) => {
    return (
      <TabItem
        key={i}
        id={el}
        title={el}
      />
    );
  });

  const tabContent = categories.map((el, i) => {
    return (
      <TabContent key={i} id={el} >
        <div className="products-wrapper">{productsCards}</div>
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
  }, [categoriesName]);

  return (
    <div className="tabs__container">
      <div className="tabs__inner">
        <ul
          className="tabs__nav"
          style={{ gridTemplateColumns: createGridTemplateStyle() }}
        >
          {tabItem}
        </ul>
        {tabContent}
      </div>
    </div>
  );
}

export default CategoriesTabs;
