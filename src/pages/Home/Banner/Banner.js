import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import background from "../../../ass12/carbg.jpg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./Banner.css";
const bannerBg = {
  background: `url(${background})`,
  backgroundSize: "cover",
  height: "85vh",
  marginTop: "-55px",
};
const Banner = () => {
  return (
    <div style={bannerBg}>
      <Container>
        <Row className="banner-intro">
          <Col xs={12} md={6} lg={6}>
            <div className="bannerinfo">
              <h1 className="text-danger mt-5">CarZone</h1>
              <p className="text-white mt-2">
                Welcome to CarZone, Reno, NV, home to the best selection of
                Carfax Certified used cars, used trucks, and used SUV's in Reno,
                Sparks and Carson City with over 300 vehicles in stock. With 2
                locations to serve you, we have CarZone #1 at 3250 Mirpur, Dhaka
                and CarZone #2 at 3055 Agrabad, Chittagong
              </p>
            </div>
            <Button variant="danger">
              Read More <DoubleArrowIcon />
            </Button>
          </Col>

          <Col xs={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
