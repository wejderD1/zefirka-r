import { Link } from "react-router-dom";
import { selectedProduct } from "../../actions/productAction";
import { useDispatch } from "react-redux";

import "./product-card.scss";

function ProductCard({ title, desc, price, img, id }) {
  const dispatch = useDispatch();


  return (
    <Link
      className="card-link"
      to={`/details/${id}`}
      style={{ textDecoration: "none" }}
      onClick={() => dispatch(selectedProduct(id))}
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
            {desc.length < 20 ? desc : desc.substr(0, 20) + "..."}
          </p>
          <h3 className="card-title card-price">{price} zł</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
