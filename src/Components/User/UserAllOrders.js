import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrdersItem from "./UserAllOrdersItem";
import UserGetAllOrderHook from "./../../hook/user/user-get-all-order-hook";
import PaginationComponent from "./../Utility/Pagination";

const UserAllOrders = () => {
  const [userName, results, paginate, orderData, onPress] =
    UserGetAllOrderHook();

  return (
    <div>
      <div className="admin-content-text pb-4">عدد الطلبات #{results}</div>
      <Row className="justify-content-between">
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <UserAllOrdersItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <h6>لا يوجد طلبات حتى </h6>
        )}

        {paginate.numberOfPages >= 2 ? (
          <PaginationComponent
            onPress={onPress}
            pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
          />
        ) : null}
      </Row>
    </div>
  );
};

export default UserAllOrders;
