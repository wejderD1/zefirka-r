import "./admin-panel.scss";

import { InputDataChange } from "../../services/hoocks";

import ProductSlider from "../../components/sliders/product-slider/product-slider";
import AdvertisingSlider from "../../components/sliders/advertising-slider/advertisingSlider";
import Slider from "../../components/slider/slider";
import UserCounter from "../../components/userCounter/userCounter";
import { useSelector } from "react-redux";

const AdminPanel = () => {
  const { categoryList } = useSelector((state) => state.categoryReducer);
  
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
    <ProductSlider categoriesName={categoryList} productCard={productCard} />,
    <AdvertisingSlider advertisingCard={advertisingCard} />,
  ];

  return (
    <div className="admin-panel page">
      <div className="admin-panel__wrapper">
        <h1 className="main-title admin-panel__title">ADMIN PANEL</h1>
        <UserCounter quantity="2" />
        <Slider
          itemsData={slides}
          option={{
            indicators: false,
          }}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
