import React from "react";
import { Container, Row } from "react-bootstrap";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import CategoryCard from "../Category/CategoryCard";

const CategoryContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row className="my-2 d-flex  justify-content-between">
        <CategoryCard img={clothe} background="#F4DBA5" />
        <CategoryCard img={cat2} background="#0034FF" />
        <CategoryCard img={labtop} background="#FFD3E8" />
        <CategoryCard img={clothe} background="#55CFDF" />
        <CategoryCard img={sale} background="#FF6262" />
        <CategoryCard img={pic} background="#F4DBA5" />
        <CategoryCard img={labtop} background="#FFD3E8" />
        <CategoryCard img={clothe} background="#55CFDF" />
        <CategoryCard img={sale} background="#FF6262" />
        <CategoryCard img={pic} background="#F4DBA5" />
        <CategoryCard img={labtop} background="#FFD3E8" />
        <CategoryCard img={clothe} background="#55CFDF" />
        <CategoryCard img={sale} background="#FF6262" />
        <CategoryCard img={pic} background="#F4DBA5" />
        <CategoryCard img={labtop} background="#FFD3E8" />
        <CategoryCard img={clothe} background="#55CFDF" />
        <CategoryCard img={sale} background="#FF6262" />
        <CategoryCard img={pic} background="#F4DBA5" />
        <CategoryCard img={labtop} background="#FFD3E8" />
        <CategoryCard img={clothe} background="#55CFDF" />
        <CategoryCard img={sale} background="#FF6262" />
        <CategoryCard img={pic} background="#F4DBA5" />
        <CategoryCard img={clothe} background="#55CFDF" />
      </Row>
    </Container>
  );
};

export default CategoryContainer;
