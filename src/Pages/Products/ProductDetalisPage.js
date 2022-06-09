import React from "react";
import { Container } from "react-bootstrap";
import CategorysHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";

const ProductDetalisPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container>
        <ProductDetails />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
