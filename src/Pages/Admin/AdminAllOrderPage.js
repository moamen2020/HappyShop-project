import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAllOrder from "../../Components/Admin/AdminAllOrder";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import PaginationComponent from "../../Components/Utility/Pagination";

const AdminAllOrderPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllOrder />
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllOrderPage;
