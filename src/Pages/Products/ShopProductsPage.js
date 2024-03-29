import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategorysHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import SideFilter from "../../Components/Utility/SideFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import ViewSearchProductsHook from "../../hook/products/view-search-product-hook";

const ShopProductsPage = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();

  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container>
        <SearchCountResult
          onClick={getProduct}
          title={`هناك ${results} نتيجة بحث`}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>

          <Col sm="10" xs="10" md="11">
            <CardProductsContainer products={items} />
          </Col>
        </Row>
        <PaginationCompontent pageCount={pagination} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
