import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cars from "../../Explore/Cars/Cars";
import Top from "../Top/Top";

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
      <div>
        <div className="p-2 ">
          <h2 className="text-center my-4">Top Cars</h2>
          <Container>
            <Row>
              {topcars?.map((service) => (
                <Top key={service._id} service={service}></Top>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TopCars;
