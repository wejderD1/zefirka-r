import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedProducts } from "../../actions/productAction";
import { categoriesChanged } from "../../actions";
import { useHttp } from "../../services/http.hooks";
import { createSelector } from "reselect";
import TabItem from "../tab-item/tab-item";
import ProductCard from "../product-card/product-card";
import "./categories-tabs.scss";
import SelectedMenu from "../selected-menu/selected-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesTabs = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const { activeCategory, categoryList } = useSelector(
    (state) => state.categoryReducer
  );

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
  const navRef = useRef(null);

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

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="tabs__container">
      <div className="tabs__inner">
        <button className="btn btn__tabs btn__tabs_left" onClick={() => scrollLeft()}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </button>
        <button className="btn btn__tabs btn__tabs_right" onClick={() => scrollRight()}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </button>
        <ul className="tabs__nav" ref={navRef}>{tabItems}</ul>
        <SelectedMenu menuItems={categoryList} />

        <div className="tabs__content">
          <div className="products-wrapper">{productsCards}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTabs;
