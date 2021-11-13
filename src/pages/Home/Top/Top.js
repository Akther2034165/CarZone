import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Top.css";
const Top = (props) => {
  const { name, img, desc, price, _id } = props.service;
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="cards shadow border-1 mb-4" id="card">
        <img src={img} className="card-img-top" id="cardImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title ms-1">{name}</h5>
          <div className="d-flex justify-content-between ms-1">
            <p>{desc}</p>
          </div>
          <h6>
            <AttachMoneyIcon />
            {price}
          </h6>
        </div>
        <div>
          <Link to={`/purchase/${_id}`}>
            <Button variant="success" className="purchaceBtn">
              BUY NOW
            </Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Top;
