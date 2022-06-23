import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle.js";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle, pathText }) => {
  const [brand, loading] = HomeBrandHook();

  console.log(brand);

  if (pathText === "") {
    pathText = "404";
  }
  return (
    <div className="my-3">
      <Container>
        {brand.data.length > 0 ? (
          <div>
            <SubTitle title={title} btntitle={btntitle} pathText={pathText} />

            <Row className="my-1 justify-content-between">
              {loading === false ? (
                brand.data ? (
                  brand.data.slice(0, 3).map((item, index) => {
                    return <BrandCard key={index} img={item.image} />;
                  })
                ) : (
                  <h3>لا يوجد ماركات</h3>
                )
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Row>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default BrandFeatured;
