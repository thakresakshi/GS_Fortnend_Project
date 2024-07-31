import React from "react";
import  CarouselExample  from "./corosalPage";
import { Container, Row, Col } from 'react-bootstrap';
import GrievanceForm from "./GrivenceFormU";
import NewsComponent from "./news";


function home() {
  const borderStyle = {
    border: '1px solid lightgray', // Light thin border
    borderRadius: '5px' // Optional: add some rounding to the corners
  };
  return (
    <div>
      <Container fluid>
      <Row>
        <Col md={4} style={{ backgroundColor: "#C1F2B0", padding: "20px", ...borderStyle }}>
          <Row style={{ paddingTop: "20px", ...borderStyle }}>
            <CarouselExample />
          </Row>
          <Row style={{ paddingTop: "20px", ...borderStyle }}>
            <NewsComponent />
          </Row>
        </Col>
        <Col md={8} style={{ backgroundColor: "#C1F2B0", padding: "20px", ...borderStyle }}>
          <h4 style={{ textAlign: "center" }}> Greviance Form </h4>
          <GrievanceForm />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default home;
