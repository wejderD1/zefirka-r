import "./admin-panel.scss";
import { useEffect, useState } from "react";

import { InputDataChange } from "../../services/hoocks";

import ProductSlider from "../../components/sliders/product-slider/product-slider";
import AdvertisingSlider from "../../components/sliders/advertising-slider/advertisingSlider";
import AdminSlider from "../../components/admin-slider/admin-slider";

const AdminPanel = ({
  categoriesName,
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


  const slides = [
    <ProductSlider
      categoriesName={categoriesName}
      productCard={productCard}
    />,
    <AdvertisingSlider
      advertisingCard={advertisingCard}
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
