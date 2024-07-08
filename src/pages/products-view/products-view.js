import CategoriesTabs from "../../components/categories-tabs/categories-tabs";
import "./products-view.scss";

const ProductsView = ({ categoriesName }) => {
  return (
    <div className="products page">
      <div className="container ">
        <div className="products__inner page__inner">
          <div className="description">
            <h1 className="main-title subtitle_bottom-line">Nasza produkcja</h1>
          </div>
        </div>
      </div>
      <CategoriesTabs categoriesName={categoriesName} />

    </div>
  );
};

export default ProductsView;
