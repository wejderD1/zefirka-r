import "./admin-panel.scss";
import { useCallback, useEffect, useRef, useState } from "react";

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

  const [selectedElement, setSelectedElement] = useState({});

  useEffect(() => {
    
  }, [selectedElement]);

  const clearTextInput = (e) => {
    const elem = Object.values(e.target.elements).filter(
      (el) => el.className === "data-input"
    );
    elem.forEach((element) => {
      element.value = "";
    });
  };
<<<<<<< HEAD
=======
  

  const slides = [
    <ProductSlider
      categoriesName={categoriesName}
      handleSubmit={handleSubmit}
      productCard={productCard}
    />,
    <AdvertisingSlider 
      advertisingCard={advertisingCard}
      handleSubmit={handleSubmit}
    />,
  ];

>>>>>>> bdb9441 (errors correct)

  //submit product to server
  const productCreate = (e) => {
    e.preventDefault();
    postData("http://localhost:5000/products/new-product", productCard.value);
    newProductCreate(productCard.value);
    clearTextInput(e);
  };

  //submit advertising to server
  const advertisingCreate = (e) => {
    e.preventDefault();
    postData(
      "http://localhost:5000/products/new-advertising",
      advertisingCard.value
    );
    newAdvertisingCreate(advertisingCard.value);
    clearTextInput(e);
  };

  const handleDelete = (id) => {
    postData("http://localhost:5000/products/remove", {
      productId: id,
    });
    onProductDelete(id);
  };

  const selectedProduct = (id) => {
    const selectedElement = productData.filter((el) => el.id === id);

    setSelectedElement((prev) => [...prev, selectedElement]);
    //получаю все инпуты на странице
    // const el = Object.values(elem.children).filter(
    //   (e) => e.className === "data-input"
    // );

    // //подставляю значения выбраного продукта в инпуты
    // for (const elem of el) {
    //   for (const e in data) {
    //     if (elem.name === e) {
    //       elem.value = data[e];
    //     }
    //   }
    // }
  };

  const slides = [
    <ProductSlider
      categoriesName={categoriesName}
      handleSubmit={productCreate}
      productCard={productCard}
      productData={productData}
      selectedProduct={selectedProduct}
    />,
    <AdvertisingSlider
      advertisingCard={advertisingCard}
      handleSubmit={advertisingCreate}
    />,
  ];

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

//create Edit List
// const advertisingEditList = advertisingData.map((el, i) => {
//   return (
//     <EditList
//       data={el}
//       key={i}
//       handleDelete={handleDelete}
//       container={itemContainer.current}
//     />
//   );
// });
