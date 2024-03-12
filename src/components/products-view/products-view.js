import CategoriesTabs from "../categories-tabs/categories-tabs";
import "./products-view.scss";

const ProductsView = ({ data }) => {

  return (
    <div className="products">
      <div className="container">
        <h1 className="subtitle subtitle_bottom-line">Nasza produkcja</h1>
      </div>
      <div className="products__inner">
        <div className="container">
          <CategoriesTabs contents={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
