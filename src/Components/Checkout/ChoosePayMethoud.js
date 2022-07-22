import React from "react";
import { Col, Row, ToastContainer } from "react-bootstrap";
import OrderPayCashHook from "../../hook/checkout/order-pay-cash-hook";
import ViewAddressesHook from "./../../hook/user/view-addresses-hook";

const ChoosePayMethoud = () => {
  const [res] = ViewAddressesHook();

  const [handelChooseAddress, addressDetalis, handelCreateOrderCash] =
    OrderPayCashHook();

  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-2">
            <input
              name="group"
              id="group1"
              type="radio"
              value="الدفع عن طريق الفيزا"
              className="mt-2 pointer"
            />
            <label className="mx-2 pointer" for="group1">
              الدفع عن طريق البطاقه الائتمانية
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="12" className="d-flex">
            <input
              name="group"
              id="group2"
              type="radio"
              value="الدفع عند الاستلام"
              className="mt-2 pointer"
            />
            <label className="mx-2 pointer" for="group2">
              الدفع عند الاستلام
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="4" className="d-flex">
            <select
              name="address"
              id="address"
              className="select mt-1 px-2 "
              onChange={handelChooseAddress}
            >
              <option value="0">اختر عنوان للشحن</option>
              {res.data ? (
                res.data.map((item, index) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.alias}
                    </option>
                  );
                })
              ) : (
                <option key={0} value={0}>
                  لا يوجد عنوانين مسجلة
                </option>
              )}
            </select>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">34000 جنية</div>
          <div
            onClick={handelCreateOrderCash}
            className="product-cart-add px-3 pt-2 d-inline me-2"
          >
            اتمام الشراء
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ChoosePayMethoud;
