import { Link } from "react-router-dom";

import "./product-card.scss";

function ProductCard({ title, desc, price, img, id, productId }) {
  return (
    <Link
      className="card-link"
      to={`/details/${id}`}
      style={{ textDecoration: "none" }}
      onClick={() => productId(id)}
    >
      <div className="card-container">
        <div className="card-wrapper">
          <img
            src={
              img
                ? require(`/src/assets/images/products_img/${img}`)
                : `http://placehold.it/250x250`
            }
            alt="product img"
            className="card-img"
          />
          <h3 className="card-title">{title}</h3>
          <p className="card-description">
            {desc.lenght > 20 ? desc : desc.substr(0, 20) + "..."}.
          </p>
          <h3 className="card-title card-price">{price} zł</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
