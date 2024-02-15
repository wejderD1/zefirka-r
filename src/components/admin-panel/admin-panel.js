import "./admin-panel.scss";

const AdminPanel = () => {
  const createProduct = () => {};

  return (
    <div className="admin-panel pt-115px">
      <h1>ADMIN PANEL</h1>

      <div className="data-input__container">
        <input className="data-input" type="text" name="product-title" id="pTitle" />
        <input className="data-input" type="text" name="product-description" id="pDescription" />
        <input className="data-input" type="text" name="product-price" id="pPrice" />
        <button type="button">CREATE</button>
      </div>
    </div>
  );
};

export default AdminPanel;
