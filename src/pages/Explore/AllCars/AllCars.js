import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import Cars from "../Cars/Cars";
import "./AllCars.css";
const AllCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://intense-stream-09981.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container p-4">
        <h2 className="text-center service">Car's Collection</h2>
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
              <Cars key={car._id} car={car}></Cars>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default AllCars;
