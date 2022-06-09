import React from "react";
import { Container } from "react-bootstrap";
import CategorysHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container>
        <SearchCountResult title="400 نتيجة بحث" />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
