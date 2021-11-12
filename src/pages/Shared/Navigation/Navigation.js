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
          <Navbar.Brand href="#home">CarZone</Navbar.Brand>
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
              <NavLink
                to="/explore"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "auto",
                  marginLeft: "10px",
                }}
              >
                Contact us
              </NavLink>
            </Nav>
            <Nav>
              {user?.email ? (
                <Box>
                  <NavLink
                    to="/dashboard"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: "auto",
                      marginRight: "15px",
                    }}
                  >
                    Dashboard
                  </NavLink>
                  <Button onClick={logout} variant="danger">
                    Logout
                  </Button>
                </Box>
              ) : (
                <NavLink to="/login">
                  <Button variant="success">Login</Button>
                </NavLink>
              )}
              <span className="username">{user?.displayName}</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
