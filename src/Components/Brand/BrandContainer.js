import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
const BrandContainer = ({ data, loading }) => {
  console.log(data);
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className="my-1 justify-content-between">
          {loading === false ? (
            data ? (
              data.slice(0, 3).map((item, index) => {
                return <BrandCard key={index} img={item.image} />;
              })
            ) : (
              <h3>لا يوجد ماركات</h3>
            )
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
