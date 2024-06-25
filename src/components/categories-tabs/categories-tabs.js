import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import TabItem from "../tab-item/tab-item";
import ProductCard from "../product-card/product-card";

import { categoriesChanged } from "../../actions";
import { fetchedProducts } from "../../actions/productAction";

import { createSelector } from "reselect";
import { useHttp } from "../../services/http.hooks";
import "./categories-tabs.scss";

function CategoriesTabs({ categoriesName }) {
  const categories = categoriesName;

  const { activeCategory } = useSelector((state) => state.categoryReducer);

  const filteredProductsListSelector = createSelector(
    (state) => state.universalReducer.products.itemsList,
    (state) => state.categoryReducer.activeCategory,
    (products, selectedCategory) => {
      return selectedCategory
        ? products.filter((el) => el.category === selectedCategory)
        : products;
    }
  );

  const filteredProductsList = useSelector(filteredProductsListSelector);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    request("http://localhost:5000/products")
      .then((data) => {
        setLoading(false);
        dispatch(fetchedProducts(data));
      })
      .catch((error) => {
        console.error(error);
        setLoading(true);
      });
  }, [request, dispatch]);

  useEffect(() => {
    dispatch(categoriesChanged(activeCategory));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
