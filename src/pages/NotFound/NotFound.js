import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <div className="notfound">
        <img
          src="https://i.ibb.co/0Bx9q3t/404.jpg"
          className="notFoundImg img-fluid"
          alt=""
        />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <Link to="/home">
          <Button variant="danger">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
