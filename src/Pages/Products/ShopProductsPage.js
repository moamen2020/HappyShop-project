import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategorysHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import SideFilter from "../../Components/Utility/SideFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container>
        <SearchCountResult title="400 نتيجة بحث" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>

          <Col sm="10" xs="10" md="11">
            <CardProductsContainer />
          </Col>
        </Row>
        <PaginationCompontent />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
