import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";

const ForgotPasswordPage = () => {
  const [email, onChangeEmail, onSubmit] = ForgetPasswordHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">نسيت كلمة السر</label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="ادخل الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-2">
            ارسال الكود
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ForgotPasswordPage;
