import "./product-gallery.scss";

function ProductGallery({ galeryImages }) {
  return (
    <div className="gallery__container">
      <div className="gallery__inner">
        {galeryImages.slice(1).map((item, i) => (
          <img
            key={i}
            src={require(`/src/assets/images/products_img/${item}`)}
            alt="galery-item"
            className="gallery__item"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
