import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import Leftsidenav from "../../Pages/Shared/Leftsidenav/Leftsidenav";
import RightsideNav from "../../Pages/Shared/RightsideNav/RightsideNav";
import Header from "../../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mt-3">
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <Leftsidenav></Leftsidenav>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
          <Col lg="2">
            <RightsideNav></RightsideNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
