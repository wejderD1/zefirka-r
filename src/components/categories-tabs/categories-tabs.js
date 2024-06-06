import { useCallback, useEffect } from "react";
import "./categories-tabs.scss";
import TabItem from "../tab-item/tab-item";
import ProductCard from "../product-card/product-card";

import { categoriesChanged } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function CategoriesTabs({ categoriesName }) {
  const categories = categoriesName;

  const filteredProductsList = useSelector((state) => {
    const productsList = state.productReducer.productsList;
    const activeCategory = state.categoryReducer.activeCategory;
    const newList = productsList.filter((el) => el.category === activeCategory);
    return newList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesChanged(categoriesName[0]));
  }, []);

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
    return <TabItem key={i} id={el} title={el} />;
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
        <div className="tab__content">
          <div className="products-wrapper">{productsCards}</div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesTabs;
