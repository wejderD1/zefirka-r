import CategoriesTabs from "../categories-tabs/categories-tabs";
import ProductCard from "../product-card/product-card";
import "./products-view.scss";

const ProductsView = ({ data }) => {
  const products = data.map((e, i) => {
    return (
      <ProductCard
        key={i}
        title={e.pTitle}
        desc={e.pDescription}
        price={e.pPrice}
        img={e.pImg}
      />
    );
  });

  return (
    <div className="products">
      <div className="container">
        <h1 className="subtitle subtitle_bottom-line">Nasza produkcja</h1>
      </div>
      <div className="products__inner">
        <div className="container">
          <CategoriesTabs productCards={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
