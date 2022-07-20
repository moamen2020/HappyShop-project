import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";

const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];

  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row className="my-2 d-flex  justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  id={item._id}
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              );
            })
          ) : (
            <h3>لا يوجد تصنيفات</h3>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
