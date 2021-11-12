import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import background from "../../../ass12/carbg.jpg";
const bannerBg = {
  background: `url(${background})`,
  backgroundSize: "cover",
  height: "85vh",
  marginTop: "-55px",
};
const Banner = () => {
  return <div style={bannerBg}></div>;
};

export default Banner;