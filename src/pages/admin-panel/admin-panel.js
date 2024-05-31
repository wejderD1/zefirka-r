import "./admin-panel.scss";
import { useRef } from "react";

import { postData } from "../../services/app";
import { InputDataChange } from "../../services/hoocks";

import EditList from "../../components/edit-list/edit-list";
import ProductSlider from "../../components/sliders/product-slider/product-slider";
import AdvertisingSlider from "../../components/sliders/advertising-slider/advertisingSlider";
import AdminSlider from "../../components/admin-slider/admin-slider";

const AdminPanel = ({
  newProductCreate,
  productData,
  categoriesName,
  advertisingData,
  onProductDelete,
  newAdvertisingCreate,
}) => {
  const productCard = InputDataChange({
    id: null,
    category: "",
    pTitle: "",
    pDescription: "",
    pPrice: null,
    pImg: "",
  });

  const advertisingCard = InputDataChange({
    aTitle: "",
    aDesc: "",
    aNote: "",
    aImg: "",
  });

  const carouselInner = useRef(null);
  const itemContainer = useRef(null);

  //submit product to server
  const handleSubmit = (e, url) => {
    e.preventDefault();
    const elem = Object.values(e.target.elements).filter(
      (el) => el.className === "data-input"
    );

    postData(url, productCard.value);
    newProductCreate(productCard.value);
    elem.forEach((element) => {
      element.value = "";
    });
  };
  

  const slides = [
    <ProductSlider
      categoriesName={categoriesName}
      handleSubmit={handleSubmit}
      productCard={productCard}
    />,
    <AdvertisingSlider 
      advertisingCard={advertisingCard}
    />,
  ];




  const handleDelete = (id) => {
    postData("http://localhost:5000/products/remove", {
      productId: id,
    });
    onProductDelete(id);
  };

  // //create Edit List
  // const productEditList = productData
  //   .filter((el) => el.category === selectedOption)
  //   .map((el, i) => {
  //     return (
  //       <EditList
  //         data={el}
  //         key={i}
  //         handleDelete={handleDelete}
  //         container={itemContainer.current}
  //       />
  //     );
  //   });

  //create Edit List
  const advertisingEditList = advertisingData.map((el, i) => {
    return (
      <EditList
        data={el}
        key={i}
        handleDelete={handleDelete}
        container={itemContainer.current}
      />
    );
  });

  return (
    <div className="admin-panel">
      <div className="admin-panel__wrapper">
        <h1>ADMIN PANEL</h1>
        <AdminSlider slides={slides} />
      </div>
    </div>
  );
};

export default AdminPanel;
