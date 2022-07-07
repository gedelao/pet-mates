import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function PrimaryNav() {
  return (
    <Navbar
      // bg="gold"
      variant="dark"
      className="mb-4"
      style={{ "--bs-bg-opacity": 0.2 }}
    >
      <Container fluid>
        <Nav
          style={{ backgroundColor: "none", fontSize: "22px" }}
          className="justify-content-center w-100"
        >
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              DOGS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/accepted">
              ACCEPTED
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/rejected">
              REJECTED
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/cats">
              CATS
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PrimaryNav;
