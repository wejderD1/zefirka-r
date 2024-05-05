import { useEffect } from "react";
import "./product-details.scss";


//нужно добавить загрузку при перезагрузке страници по тому самому id
//вытягивать через url
//делать запрос в юзЕффект на сервер или с локалсторадж

function ProductDetails({productData}) {
  const {pTitle, pDescription, pImg, pPrice} = productData;

  return (
    <div className="container product-details__container">
      <div className="product-details__inner">
        <div className="product__info">
          <h2 className="product__title subtitle product__title_bottom-line">
            {pTitle}
          </h2>
          <h3 className="main-text product__details">
            {pDescription}
          </h3>
          <div>
            <h3 className="product__price">{pPrice}</h3>
            <button className="product__btn btn">Kupuję</button>
            <button className="product__btn btn">Powrót</button>
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
