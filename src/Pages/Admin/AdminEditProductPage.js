import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminEditProduct from "../../Components/Admin/AdminEditProduct";

const AdminEditProductPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminEditProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProductPage;
