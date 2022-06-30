import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import PaginationComponent from "../../Components/Utility/Pagination";
import ViewProductAdminHook from "../../hook/admin/view-product-admin-hook";

const AdminAllProductsPage = () => {
  const [items, pagination] = ViewProductAdminHook();

  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts products={items} />
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
