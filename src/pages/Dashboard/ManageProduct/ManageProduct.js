import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { Button, Col } from "react-bootstrap";
import "./ManageProduct.css";
const ManageProduct = () => {
  const [cars, setCars] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  useEffect(() => {
    fetch("https://intense-stream-09981.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [isDeleted]);
  const handleDelete = (id) => {
    fetch(`https://intense-stream-09981.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          setIsDeleted(true);
        } else {
          setIsDeleted(false);
        }
      });
  };
  return (
    <div className="container">
      <h2 className="text-center ">MANAGE PRODUCTS</h2>
      <hr
        style={{
          width: "360px",
          margin: "auto",
          height: "3px",
          marginBottom: "10px",
          color: "gray",
        }}
      />
      {!cars.length ? (
        <div className="text-center ">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {cars.map((car) => (
            <Col lg={4} md={4} sm={12}>
              <div className="cards shadow border-1 mb-4" id="card">
                <img
                  src={car.img}
                  className="card-img-top"
                  id="cardImg"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title ms-1">{car.name}</h5>
                  <div className="d-flex justify-content-between ms-1">
                    <p>{car.desc}</p>
                  </div>
                  <h6>
                    <i className="fas fa-dollar-sign text-danger"> </i>
                    {car.price}
                  </h6>
                </div>
                <div>
                  <Button
                    variant="danger"
                    className="purchaceBtn"
                    onClick={() => handleDelete(car._id)}
                  >
                    DELETE PRODUCT
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ManageProduct;
