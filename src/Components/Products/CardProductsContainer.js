import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";
import CardContainerHook from "../../hook/products/card-container-hook";

const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
  const [favProd] = CardContainerHook();
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="justify-content-between ">
        {products
          ? products.map((product, index) => (
              <ProductCard key={index} favProd={favProd} product={product} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
