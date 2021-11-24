import { Box } from "@mui/system";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="transparent">
        <Container>
          <Navbar.Brand href="#home" className="text-danger webName">
            CarZone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to="/home"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "auto",
                  marginLeft: "10px",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "auto",
                  marginLeft: "10px",
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/explore"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "auto",
                  marginLeft: "10px",
                }}
              >
                Explore
              </NavLink>
              {user?.email && (
                <NavLink
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  Dashboard
                </NavLink>
              )}
            </Nav>
            <Nav>
              <span className="username">{user?.displayName}</span>
              {user?.email ? (
                <Box>
                  <Button onClick={logout} variant="danger">
                    Logout
                  </Button>
                </Box>
              ) : (
                <NavLink to="/login">
                  <Button variant="success">Login</Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
