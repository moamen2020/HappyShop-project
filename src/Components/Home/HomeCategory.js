import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = ({ title, btntitle, pathText }) => {
  const [category, loading, colors] = HomeCategoryHook();

  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex  justify-content-between">
        {loading === false ? (
          category.data ? (
            category.data.slice(0, 3).map((item, index) => {
              return (
                <CategoryCard
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

export default HomeCategory;
