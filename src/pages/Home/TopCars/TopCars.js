import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cars from "../../Explore/Cars/Cars";

const TopCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  //slice data to show top four courses
  const topcars = cars.slice(0, 6);
  return (
    <div>
      <h1>{topcars.length}</h1>
      <div>
        <div className="p-2 ">
          <h2 className="text-center my-4">Available Services</h2>
          {/* <Container>
            <Row>
              {topcars?.map((service) => (
                <Car key={service._id} service={service}></Car>
              ))}
            </Row>
          </Container> */}
        </div>
      </div>
    </div>
  );
};

export default TopCars;
