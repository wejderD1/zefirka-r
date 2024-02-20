import "./product-cards.scss";

function ProductCards() {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <img
          src="http://placehold.it/150x150"
          alt="product ing"
          className="card-img"
        />
        <h3 className="card-title">Lorem ipsum dolor</h3>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, exercitationem.
        </p>
        <h3 className="card-title price">10.00 zł</h3>
      </div>
    </div>
  );
}

export default ProductCards;
