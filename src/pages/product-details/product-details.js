import { Link } from "react-router-dom";

import "./product-details.scss";

//нужно добавить загрузку при перезагрузке страници по тому самому id
//вытягивать через url
//делать запрос в юзЕффект на сервер или с локалсторадж

function ProductDetails({ productData }) {
  const { pTitle, pDescription, pImg, pPrice } = productData;
  return (
    <div className="container product-details__container">
      <div className="product-details__inner">
        <div className="product__info">
          <h2 className="product__title subtitle product__title_bottom-line">
            {pTitle}
          </h2>
          <h3 className="main-text product__details">{pDescription}</h3>
          <h3 className="product__price">{pPrice} zł</h3>
          <div>
            {/* <Link className="product__btn btn">Kupuję</Link> */}
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
