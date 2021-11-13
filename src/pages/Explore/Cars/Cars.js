import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Cars.css";
const Cars = (props) => {
  //props destructure
  const { _id, name, img, desc, price } = props.car;

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
              Purchase Now
            </Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Cars;
