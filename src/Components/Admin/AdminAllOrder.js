import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrderItem from "./AdminAllOrderItem";
const AdminAllOrder = () => {
  return (
    <div>
      <Row className="justify-content-between ">
        <div className="admin-content-text">اداره جميع الطلبات</div>
        <AdminAllOrderItem />
        <AdminAllOrderItem />
        <AdminAllOrderItem />
        <AdminAllOrderItem />
      </Row>
    </div>
  );
};

export default AdminAllOrder;
