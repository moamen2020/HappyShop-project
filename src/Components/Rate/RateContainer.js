import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RateItem from "./RateItem";
import PostRate from "./PostRate";
import PaginationCompontent from "../Utility/Pagination";
import rate from "../../images/rate.png";

const RateContainer = ({ rataAvg, rataQty }) => {
  return (
    <Container className="rate-container my-5">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rataAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">({rataQty} تقييم)</div>
        </Col>
      </Row>

      <PostRate />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <PaginationCompontent />
    </Container>
  );
};

export default RateContainer;
