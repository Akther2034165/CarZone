import React from "react";
import { Button, Col } from "react-bootstrap";

const ManagesProducts = (props) => {
  //props destructure
  const { name, img, desc, price } = props.car;
  return (
    <Col lg={3} md={3} sm={12}>
      <div className="cards shadow border-1 mb-4" id="card">
        <img src={img} className="card-img-top" id="cardImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title ms-1">{name}</h5>
          <div className="d-flex justify-content-between ms-1">
            <p>{desc}</p>
          </div>
          <h6>
            <i className="fas fa-dollar-sign text-danger"> </i>
            {price}
          </h6>
        </div>
        <div>
          <Button variant="danger" className="purchaceBtn">
            DELETE PRODUCT
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default ManagesProducts;
