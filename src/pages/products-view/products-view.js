import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useHttp } from "../../services/http.hooks";
import { fetchedProducts } from "../../actions/productAction";

import CategoriesTabs from "../../components/categories-tabs/categories-tabs";
import "./products-view.scss";

const ProductsView = ({ categoriesName }) => {
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:5000/products")
      .then((data) => dispatch(fetchedProducts(data)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="products">
      <div className="container ">
        <h1 className="subtitle subtitle_bottom-line">Nasza produkcja</h1>
      </div>
      <div className="products__inner">
        <div className="container">
          <CategoriesTabs categoriesName={categoriesName} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
