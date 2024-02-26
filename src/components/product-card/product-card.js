import "./product-card.scss";

function ProductCard({title, desc, price, img}) {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <img
          src={
            img
             ? require(`/src/assets/images/products_img//${img}`) 
             : `http://placehold.it/250x250`
            }
          alt="product img"
          className="card-img"
        />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          {desc}.
        </p>
        <h3 className="card-title price">{price} zł</h3>
      </div>
    </div>
  );
}

export default ProductCard;
