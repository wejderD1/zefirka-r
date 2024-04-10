import "./product-details.scss";

function ProductDetails() {
  return (
    <div className="container product-details__container">
      <div className="product-details__inner">
        <div className="product__info">
          <h2 className="product__title subtitle product__title_bottom-line">
            romowa babka
          </h2>
          <h3 className="main-text product__details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, nostrum exercitationem. Sunt, ullam aut architecto
            necessitatibus dolor fugiat, dignissimos suscipit fuga soluta odit
            reiciendis totam rerum, autem maxime blanditiis velit?
          </h3>
          <div>
            <h3 className="product__price">333zł</h3>
            <button className="product__btn btn">Kupuję</button>
          </div>
        </div>
        <img
          src={require(`../../assets/images/products_img/20220308_193827-min.jpg`)} //относительный путь, работает только в папке components/component
          alt="product_image"
          className="product__photo"
        />
      </div>
    </div>
  );
}

export default ProductDetails;
