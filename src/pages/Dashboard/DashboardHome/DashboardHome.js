import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./DashboardHome.css";
const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Row>
        <Col lg={12} sm={12}>
          <h1 className="text-center">
            WELCOME TO {user.displayName} DASHBOARD
          </h1>
          <h5 className="text-center">Hey!! You can explore your data here</h5>
        </Col>
        <img
          className="welcomeimg"
          src="https://i.ibb.co/vDKBJVb/welcome.jpg"
          alt=""
        />
      </Row>
    </Container>
  );
};

export default DashboardHome;
