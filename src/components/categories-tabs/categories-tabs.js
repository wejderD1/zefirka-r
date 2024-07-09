import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedProducts } from "../../actions/productAction";
import { categoriesChanged } from "../../actions";
import { useHttp } from "../../services/http.hooks";
import { createSelector } from "reselect";
import TabItem from "../tab-item/tab-item";
import ProductCard from "../product-card/product-card";
import "./categories-tabs.scss";
import SelectedMenu from "../selected-menu/selected-menu";

const CategoriesTabs = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const { activeCategory, categoryList } = useSelector((state) => state.categoryReducer);

  const filteredProductsListSelector = createSelector(
    (state) => state.universalReducer.products.itemsList,
    (state) => state.categoryReducer.activeCategory,
    (products, selectedCategory) => {
      if (!products) return [];
      return selectedCategory
        ? products.filter((el) => el.category === selectedCategory)
        : products;
    }
  );

  const filteredProductsList = useSelector(filteredProductsListSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    request("http://localhost:5000/products")
      .then((data) => {
        setLoading(false);
        dispatch(fetchedProducts(data));
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Обработка ошибки: сброс состояния загрузки
      });
  }, [request, dispatch]); // Обновление при изменении request или dispatch

  useEffect(() => {
    dispatch(categoriesChanged(activeCategory));
  }, [dispatch, activeCategory]); // Обновление при изменении activeCategory

  const createGridTemplateStyle = () => {
    let str = "";
    for (let index = 0; index < categoryList.length; index++) {
      str += "1fr ";
    }
    return str;
  };

  const productsCards = filteredProductsList.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.pTitle}
      desc={product.pDescription}
      price={product.pPrice}
      img={product.pImg}
    />
  ));

  const tabItems = categoryList.map((category, index) => (
    <TabItem key={index} id={category} title={category} />
  ));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tabs__container">
      <div className="tabs__inner">
        <ul
          className="tabs__nav"
          style={{ gridTemplateColumns: createGridTemplateStyle() }}
        >
          {tabItems}
        </ul>
        <SelectedMenu menuItems={categoryList}  />

        <div className="tabs__content">
          <div className="products-wrapper">{productsCards}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTabs;
