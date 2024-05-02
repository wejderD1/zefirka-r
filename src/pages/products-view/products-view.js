import { useEffect } from "react";
import CategoriesTabs from "../../components/categories-tabs/categories-tabs";
import "./products-view.scss";

const ProductsView = ({ data, categoriesName }) => {

  useEffect(() => {
    console.log("data", data);
  }, [])

  return (
    <div className="products">
      <div className="container ">
        <h1 className="subtitle subtitle_bottom-line">Nasza produkcja</h1>
      </div>
      <div className="products__inner">
        <div className="container">
          <CategoriesTabs contents={data} categoriesName = {categoriesName} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
