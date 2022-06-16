import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";

const HomeCategory = ({ title, btntitle, pathText }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

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
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex  justify-content-between">
        {category.data ? (
          category.data.slice(0, 2).map((item, index) => {
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
        )}
        {loading && <Spinner animation="border" variant="primary" />}
      </Row>
    </Container>
  );
};

export default HomeCategory;
