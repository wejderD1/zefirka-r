import CategoriesTabs from "../../components/categories-tabs/categories-tabs";
import "./products-view.scss";

const ProductsView = ({ categoriesName }) => {
  return (
    <div className="products page">
      <div className="products__header">
        <div className="container ">
          <div className="products__inner page__inner">
            <div className="description">
              <h1 className="main-title subtitle_bottom-line">
                Nasza produkcja
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CategoriesTabs categoriesName={categoriesName} />
      </div>
    </div>
  );
};

export default ProductsView;
