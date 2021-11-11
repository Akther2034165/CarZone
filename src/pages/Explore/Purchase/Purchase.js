import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import "./Purchase.css";
const Purchase = () => {
  const { carID } = useParams();
  const [singleCar, setSingleCar] = useState({});
  const { user } = useAuth();
  const [name, setUsername] = useState("");
  const [email, setUseremail] = useState("");
  const [useraddress, setAddress] = useState("");
  const [regDate, setDate] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/car/${carID}`)
      .then((res) => res.json())
      .then((data) => setSingleCar(data));
  });
  const handleBooking = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const address = useraddress;
    const date = regDate;
    const title = singleCar.name;
    const charge = singleCar.price;
    const status = "Pending";
    const regService = {
      name,
      email,
      date,
      address,
      title,
      charge,
      status,
    };
    swal({
      title: "Are you sure?",
      text: "Booking this spot!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        fetch(`http://localhost:5000/addtocart`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(regService),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("Good!", "Booking Successful!", "success");
              e.target.reset();
            }
          });
      } else {
        swal("Your Booking is Cancel");
        e.target.reset();
      }
    });
  };
  return (
    <Container>
      <Row>
        <h2 className="detailsTitle text-center">Booking Spot</h2>
        <Col lg={6} md={6} xs={12}>
          <Card
            style={{
              marginTop: "20px",
              marginBottom: "40px",
              width: "400px",
              height: "500px",
            }}
          >
            <Card.Img
              variant="left"
              src={singleCar?.img}
              className="detailImg img-fluid"
            />
            <Card.Body>
              <Card.Title>{singleCar.name}</Card.Title>
              <Card.Text>{singleCar.desc}</Card.Text>
              <Card.Text>{singleCar.details}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <form className="bookingform" onSubmit={handleBooking}>
            <input
              onBlur={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Full Name"
              defaultValue={user.displayName}
              required
            />
            <br />
            <br />
            <input
              onBlur={(e) => setUseremail(e.target.value)}
              type="email"
              placeholder="Email"
              defaultValue={user.email}
              required
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Service title"
              defaultValue={singleCar.name}
            />
            <br />
            <br />
            <input
              onBlur={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Date"
            />
            <br />
            <br />
            <input
              onBlur={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
              required
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Price"
              defaultValue={singleCar.price}
            />
            <br />
            <br />
            <Button variant="success" className="bookingBtn" type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Purchase;
