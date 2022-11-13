import React from "react";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

export const ServiceNav = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-4"
    >
      
        <Navbar.Brand href="/">Dealership Vehicle Locator</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-white" to="/">
                Search
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-white" to="/vehicles">
                All Vehicles
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="gap-2">
            <Nav.Link href="#">
              Login
            </Nav.Link>
            {localStorage.getItem("bro_user") ? (
              <Nav.Link
                eventKey={2}
                href="#"
                onClick={() => {
                  localStorage.removeItem("bro_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};
