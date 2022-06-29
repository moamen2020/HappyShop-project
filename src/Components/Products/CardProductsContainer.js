import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";

const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
  console.log(products);
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="justify-content-between ">
        {products
          ? products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
