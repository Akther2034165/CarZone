import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./Service.css";
const Service = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center px-2">
          <h2 className="text-center">OUR SERVICES</h2>
          <Col xs={12} md={6} lg={6}>
            <p>
              Find Car Service In Usa. Unlimited Access. 100% Secure. Always
              Facts. Privacy Friendly. The Best Resources.
            </p>

            <Row xs={2} md={2} lg={2}>
              <Col>
                <h3>
                  BEST DEAL <ThumbsUpDownIcon />
                </h3>
              </Col>
              <Col>
                <h3>
                  PAYMENT FLEXIBILITY <CreditCardIcon />
                </h3>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4} lg={6}>
            <div className="service-image">
              <img
                className="imagess"
                src="https://i.ibb.co/zxZpwxz/car.jpg"
                alt="service"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
