import React from "react";
import SideMenu from "./Components/SideMenu";
import Dashboardprm from "./Components/Dashboard";
// import PageContentprm from "./Components/PageContent";
import {Container,Row,Col,} from "react-bootstrap";
import {  Typography } from "antd";



function mainprm() {
  return (
    <Container  className="App">
      <Typography.Title level={2} style={{ textAlign: "center"}}>
           Welcome Public Relationship Manager (PRM) 
          </Typography.Title>
    <Row className="SideMenuAndPageContent">
        <Col md={2}>
        <SideMenu/>

        </Col>
        <Col md={10}>
        <Dashboardprm/>

        </Col>
    </Row>
</Container>
  );
}

export default mainprm;
