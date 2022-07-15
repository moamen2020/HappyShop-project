import React from "react";
import { Container } from "react-bootstrap";
import CategorysHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import { useParams } from "react-router-dom";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ViewProductDetailsHook from "../../hook/products/view-product-details-hook";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, category, brand, productsLike] =
    ViewProductDetailsHook(id);

  if (item) {
    var rateAvg = item.ratingsAverage;
    var rateQty = item.ratingsQuantity;
  }

  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductsContainer
          products={productsLike}
          title="منتجات قد تعجبك"
        />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
