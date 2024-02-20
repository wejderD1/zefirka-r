import "./admin-panel.scss";

const AdminPanel = () => {
  const createProduct = () => {};

  return (
    <div className="admin-panel">
      <h1>ADMIN PANEL</h1>

      <div className="data-input__container">
        <label className="label" htmlFor="pTitle">product title</label>
        <input className="data-input" type="text" name="product-title" id="pTitle" />
        <label className="label" htmlFor="pDescription">product description</label>
        <input className="data-input" type="text" name="product-description" id="pDescription" />
        <label className="label" htmlFor="pPrice">product price</label>
        <input className="data-input" type="text" name="product-price" id="pPrice" />
        <button className="btn admin-panel__button" type="button">CREATE</button>
      </div>
    </div>
  );
};

export default AdminPanel;
