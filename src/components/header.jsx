import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './header.css'; 

function Header() {
  return (
    <header >
      <Container fluid>
        <Row className="align-items-center" style={{ backgroundColor: "#FFB534" }}>
          <Col md={2} xs={3} style={{ padding: "20px" }}>
            <img
              className="img-fluid"
              src="ZPlogo.png"
              alt="ZP-LOGO"
              id="zp-logo"
            />
          </Col>
          <Col md={8} xs={6} style={{ padding: "20px" }}>
            <h1 className="header-title">Rural Development & Panchayat Raj Department</h1>
            <h2 className="header-subtitle">Government Of Maharashtra</h2>
          </Col>
          <Col md={2} xs={3} style={{ padding: "20px" }}>
            <img
              className="img-fluid"
              src="EmbluLogo.png"
              alt="Indian Emblum"
              id="emblem-logo"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
