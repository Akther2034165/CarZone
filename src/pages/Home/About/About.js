import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import PaymentIcon from "@mui/icons-material/Payment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navigation />
      <Container className="mb-5">
        <Row className="about">
          <Col lg={12} md={12} sm={12}>
            <div className="heading text-center">
              <h2>About Our Policy</h2>
              <h4>We Offer High Quality Product</h4>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <h1 className="text-center mt-2 title">
              <span className="text-danger">CarZone</span>
            </h1>
            <hr style={{ marginLeft: "25%", width: "50%" }} />
          </Col>
          <Col lg={6} md={6} sm={12} className="mt-5">
            <h4>
              We offer high quality vehicles at unbelievable prices & creates
              pleasant buying experience.
            </h4>
            <div>
              <div className="payment">
                <div>
                  <PaymentIcon sx={{ fontSize: "50px", color: "goldenrod" }} />
                </div>
                <div className="mx-3">
                  <h5>Affordable Auto Prices</h5>
                  <p>CarZone is nisi aliquip consequat duis velit esse</p>
                </div>
              </div>
            </div>
            <div>
              <div className="payment">
                <div>
                  <DirectionsCarIcon
                    sx={{ fontSize: "50px", color: "goldenrod" }}
                  />
                </div>
                <div className="mx-3">
                  <h5>20 Years in Business</h5>
                  <p>Vehicles is nisi aliquip consequat duis velit</p>
                </div>
              </div>
            </div>
            <div>
              <div className="payment">
                <div>
                  <ThumbUpIcon sx={{ fontSize: "50px", color: "goldenrod" }} />
                </div>
                <div className="mx-3">
                  <h5>Trusted & Genuine Parts</h5>
                  <p>CarZone is nisi aliquip consequat duis ted</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mt-5">
            <div data-aos="fade-left">
              <img
                className="aboutImages"
                src="https://i.ibb.co/5KVj569/BMW-M6-Coupe.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
