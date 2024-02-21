import "./product-card.scss";

function ProductCard({title, desc, price, img}) {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <img
          src={require(`/src/assets/images/products_img//${img}`)}
        // srcSet="~/public/img/20220308_193827.webp"
          // src="http://placehold.it/150x150"
          // srcSet={pImg}
          alt="product img"
          className="card-img"
        />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          Lorem ipsum dolor sit amet = {desc}.
        </p>
        <h3 className="card-title price">{price} zł</h3>
      </div>
    </div>
  );
}

export default ProductCard;
