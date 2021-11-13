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
          <h2 className="text-center mt-5">OUR SPECIALITIES</h2>
          <Col xs={12} md={6} lg={6}>
            <p>
              Find Car In Bangladesh . Unlimited Access. 100% Secure. Privacy
              Friendly. The Best Dealers.
            </p>

            <Row xs={2} md={2} lg={2}>
              <Col>
                <h3>
                  BEST DEAL <ThumbsUpDownIcon />
                </h3>
                <p>
                  Find the Best Extended Auto Warranty to Cover Car Repairs,
                  Maintenance and More! We Make Shopping for Auto Warranties
                  Quick and Easy!
                </p>
              </Col>
              <Col>
                <h3>
                  PAYMENT FLEXIBILITY <CreditCardIcon />
                </h3>
                <p>
                  You can find your desire car within your budget here.We are
                  always ready to give you high quality services
                </p>
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
