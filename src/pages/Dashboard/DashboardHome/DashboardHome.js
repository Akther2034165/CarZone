import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./DashboardHome.css";
const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-center">Welcome to {user.displayName} Dashboard</h1>
      <div className="dashHome">
        <Link to="/home">
          <Button variant="success">BACK TO HOME</Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
