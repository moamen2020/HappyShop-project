import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import Slider from "../../Components/Home/Slider";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../hook/products/view-home-products-hook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory
        title=" التصنيفات"
        btntitle="المزيد"
        pathText="/allcategory"
      />
      <CardProductsContainer
        products={items}
        title="الأكثر مبيعاً"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        products={items}
        title="أحدث الأزياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" pathText="brand" />
    </div>
  );
};

export default HomePage;
