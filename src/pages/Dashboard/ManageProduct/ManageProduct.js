import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Cars from "../../Explore/Cars/Cars";
import ManagesProducts from "../ManagesProducts/ManagesProducts";

const ManageProduct = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center service">Manage Product</h2>
      <hr
        style={{
          width: "250px",
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
            <ManagesProducts key={car._id} car={car}></ManagesProducts>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ManageProduct;
