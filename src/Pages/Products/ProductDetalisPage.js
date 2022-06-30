import React from "react";
import { Container } from "react-bootstrap";
import CategorysHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";

const ProductDetalisPage = () => {
  const { id } = useParams();

  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container>
        <ProductDetails id={id} />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
