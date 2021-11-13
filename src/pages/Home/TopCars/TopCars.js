import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Top from "../Top/Top";

const TopCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://intense-stream-09981.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  //slice data to show top four courses
  const topcars = cars.slice(0, 6);
  return (
    <div>
      <div>
        <div className="p-2 ">
          <h2 className="text-center my-4">FEATURES CARS</h2>
          <Container>
            {!cars.length ? (
              <div className="text-center ">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Row>
                {topcars?.map((service) => (
                  <Top key={service._id} service={service}></Top>
                ))}
              </Row>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TopCars;
