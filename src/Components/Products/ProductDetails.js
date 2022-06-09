import React from "react";
import { Col, Row } from "react-bootstrap";
import RateContainer from "../Rate/RateContainer";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetails = () => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery />
        </Col>

        <Col lg="8">
          <ProductText />
        </Col>

        <RateContainer />
      </Row>
    </div>
  );
};

export default ProductDetails;
