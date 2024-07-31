import React from "react";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import {Container,Row,Col,} from "react-bootstrap";



function mainemp() {
  return (
    <Container  className="App">
        <Row className="SideMenuAndPageContent">
            <Col md={2}>
            <SideMenu/>

            </Col>
            <Col md={10}>
            <PageContent/>

            </Col>
        </Row>
    </Container>
  );
}

export default mainemp;
