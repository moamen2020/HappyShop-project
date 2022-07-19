import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewAddressesHook from "../../hook/user/view-addresses-hook";
import UserAddressCard from "./UserAddressCard";

const UserAllAddress = () => {
  const [res] = ViewAddressesHook();
  return (
    <div>
      <Row className="">
        <div className="admin-content-text">دفتر العنوانين</div>
        {res.data ? (
          res.data.map((item, index) => {
            return <UserAddressCard key={index} item={item} />;
          })
        ) : (
          <h6>لا يوجد عنوانين حتى الان</h6>
        )}
        <Row className="justify-content-center">
          <Col sm="5" className="d-flex justify-content-center">
            <Link to="/user/add-address" style={{ textDecoration: "none" }}>
              <button className="btn-add-address">اضافه عنوان جديد</button>
            </Link>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default UserAllAddress;
