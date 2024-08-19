import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import "./product-details.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, fetchedProducts } from "../../actions/productAction";
import { useHttp } from "../../services/http.hooks";
import ProductGallery from "../../components/product-gallery/product-gallery";

function ProductDetails() {
  const { id } = useParams();
  const { request } = useHttp();

  const dispatch = useDispatch();
  const { oneProduct } = useSelector(
    (state) => state.universalReducer.products
  );

  useEffect(() => {
    request("http://localhost:5000/products")
      .then((data) => {
        dispatch(fetchedProducts(data));
        dispatch(selectedProduct(id));
      })
      .catch((error) => console.error(error));
  }, [id, request]);

  if (!oneProduct || Object.keys(oneProduct).length === 0) {
    return <div>Loading...</div>;
  }
  const { pTitle, pDescription, pPrice, pImg } = oneProduct;
  return (
    <div className="product-details__container page">
      <div className="container">
        <div className="product-details__inner">
          <div className="product__info">
            <h2
              className="subtitle product__title product__title_bottom-line"
              type="title"
            >
              {pTitle}
            </h2>
            <h3 className="main-text product__details">{pDescription}</h3>
            <h3 className="product__price">{pPrice} zł</h3>
            <Link to="/produkty" className="product__btn btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="back-ico"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Powrót
            </Link>
          </div>
          <img
            src={require(`../../assets/images/products_img/${pImg[0]}`)}
            alt="product_image"
            className="product__photo"
          />
        </div>
        <ProductGallery galeryImages={pImg}/>
      </div>
    </div>
  );
}

export default ProductDetails;
