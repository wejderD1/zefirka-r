import { Link } from "react-router-dom";

import "./product-card.scss";

function ProductCard({ title, desc, price, img, productId }) {
  return (
    <Link className="card-link" style={{textDecoration: "none"}} to={`/product-details/${productId}`}>
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
          <p className="card-description">{desc}.</p>
          <h3 className="card-title card-price">{price} zł</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
