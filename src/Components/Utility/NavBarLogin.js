import React from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";
import NavbarSearchHook from "../../hook/search/navbar-search-hook";

const NavBarLogin = () => {
  const [onChangeSearch, searchWord] = NavbarSearchHook();
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={localStorage.getItem("SearchWord")}
            onChange={onChangeSearch}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <img src={login} className="login-img" alt="sfvs" />

              <p style={{ color: "white" }}>دخول</p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
