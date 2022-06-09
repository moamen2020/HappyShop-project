import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="justify-content-between ">
        <ProductCard title="1" />
        <ProductCard title="2" />
        <ProductCard title="3" />
        <ProductCard title="4" />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
