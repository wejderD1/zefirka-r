import "./product-card.scss";

function ProductCard({title, desc, price}) {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <img
          src="http://placehold.it/150x150"
          alt="product ing"
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
