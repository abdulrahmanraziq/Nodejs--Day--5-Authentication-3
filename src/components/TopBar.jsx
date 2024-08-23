import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import UseLogout from "../utils/UseLogout";

function TopBar() {
  let logout = UseLogout();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>User Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/user-dashboard">User Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin-dashboard">Admin Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
