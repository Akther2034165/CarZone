import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

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
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "auto",
                  marginLeft: "10px",
                }}
              >
                Dashboard
              </NavLink>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <span className="text-danger">{user?.displayName}</span>
              {user?.email ? (
                <Button onClick={logout}>Logout</Button>
              ) : (
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    margin: "auto",
                  }}
                >
                  Login
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
