import ProductCard from "../product-cards/product-cards";
import "./products-view.scss";

const ProductsView = ({data}) => {
  const {pTitle, pDescription, pPrice} = data;
  console.log(data);
  return (
    <div className="products pt-115px">
      <div className="container">
        <h1 className="subtitle subtitle_bottom-line">Nasza produkcja</h1>
      </div>
      <div className="products__inner">
        <div className="container">
          {/* <ProductItem v-for="(item, index) in this.products" :key="index"
          :img="item.img"
          :title="item.title"
          :text="item.text"
          :price="item.price"
        /> */}
          <div className="products-wrapper">
            
          </div>
          <ProductCard title={pTitle} desc={pDescription} price={pPrice}/>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
