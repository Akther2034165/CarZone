import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-center">Welcome to car Zone</h1>
      <Link to="/home">
        <Button variant="success">BACK TO HOME</Button>
      </Link>
    </div>
  );
};

export default DashboardHome;
