import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getResource } from "../../services/app";
import { productsFetched } from "../../actions";

import CategoriesTabs from "../../components/categories-tabs/categories-tabs";
import "./products-view.scss";

const ProductsView = ({ categoriesName }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    getResource("http://localhost:5000/products")
      .then((data) => dispatch(productsFetched(data)))
      .catch((error) => console.log(error));

  }, []);

  return (
    <div className="products">
      <div className="container ">
        <h1 className="subtitle subtitle_bottom-line">Nasza produkcja</h1>
      </div>
      <div className="products__inner">
        <div className="container">
          <CategoriesTabs
            categoriesName={categoriesName}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
