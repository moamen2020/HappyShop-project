import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = () => {
  return (
    <div>
      <div className="admin-content-text">اداره جميع المنتجات</div>
      <Row>
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </Row>
    </div>
  );
};

export default AdminAllProducts;
