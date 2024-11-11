import React, { useState, useEffect, useRef, Fragment, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedProducts } from "../../actions/productAction";
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

  const counter = useRef(8); //количество отображаемых продуктов
  const filteredProductsList = useSelector(filteredProductsListSelector);
  const [loading, setLoading] = useState(true);
  const [startPos, setStartPos] = useState(0);
  const [endPos, setEndPos] = useState(counter.current);
  const navRef = useRef(null);

  // Загрузка продуктов при монтировании компонента
  useEffect(() => {
    setLoading(true);
    console.log(filteredProductsList);
    
    request("http://localhost:5000/products")
      .then((data) => {
        setLoading(false);
        dispatch(fetchedProducts(data));
        
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [request, dispatch]);

  // Сброс позиций при изменении категории
  useEffect(() => {
    setStartPos(0);
    setEndPos(counter.current);
  }, [activeCategory]);

  const endProductsList = useMemo(
    () => filteredProductsList.slice(startPos, endPos),
    [filteredProductsList, startPos, endPos]
  );

  const productsCards = endProductsList.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.pTitle}
      desc={product.pDescription}
      price={product.pPrice}
      img={product.pImg[0]}
    />
  ));

  const tabItems = categoryList.map((category, index) => (
    <TabItem key={index} id={category} title={category} />
  ));

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

  const slideLeft = () => {
    if (startPos > 0) {
      const newStartPos = Math.max(startPos - counter.current, 0);
      const newEndPos = Math.max(endPos - counter.current, counter.current);
      setStartPos(newStartPos);
      setEndPos(newEndPos);
    }
  };

  const slideRight = () => {
    if (endPos < filteredProductsList.length) {
      const newStartPos = startPos + counter.current;
      const newEndPos = Math.min(endPos + counter.current, filteredProductsList.length);
      setStartPos(newStartPos);
      setEndPos(newEndPos);
    }
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Fragment>
      <div className="tabs__container">
        <div className="tabs__inner">
          <button
            className="btn btn__tabs btn__tabs_left btn__arrow"
            onClick={() => scrollLeft()}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </button>
          <button
            className="btn btn__tabs btn__tabs_right btn__arrow"
            onClick={() => scrollRight()}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </button>
          <ul className="tabs__nav" ref={navRef}>
            {tabItems}
          </ul>
          <SelectedMenu menuItems={categoryList} />
        </div>
      </div>
      <div className="tabs__content">
        <div className="products-wrapper">{productsCards}</div>
        <div className="button__container">
          <button
            className="btn btn__arrow btn__list"
            onClick={(e) => {
              e.stopPropagation();
              slideLeft();
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </button>
          <button
            className="btn btn__arrow btn__list"
            onClick={(e) => {
              e.stopPropagation();
              slideRight();
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoriesTabs;