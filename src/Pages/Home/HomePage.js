import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import Slider from "../../Components/Home/Slider";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory
        title=" التصنيفات"
        btntitle="المزيد"
        pathText="/allcategory"
      />
      <CardProductsContainer
        title="الأكثر مبيعاً"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        title="أحدث الأزياء"
        btntitle="المزيد"
        pathText=""
      />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" pathText="brand" />
    </div>
  );
};

export default HomePage;
