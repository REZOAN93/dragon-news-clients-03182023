import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../Context/AuthProvider/AuthProvider";
import Leftsidenav from "../Leftsidenav/Leftsidenav";
import "./Header.css";

const Header = () => {
  const { user,LogOut } = useContext(Authcontext);

  const handleSignOut = () => {
    LogOut();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand>
          <Link id="dragon-news" to={"/"}>
            Dragon-News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Category List
              </NavDropdown.Item>
              <NavDropdown.Item className="d-lg-none">
                <Leftsidenav></Leftsidenav>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user.displayName}</Nav.Link>
            <Image
              roundedCircle
              style={{ width: "45px" }}
              src={user.photoURL}
            ></Image>
            <>
              {user.email ? (
                <>
                  <Link onClick={handleSignOut}>Sign Out</Link>
                </>
              ) : (
                <>
                  <Link>Register</Link>
                  <Link>Login</Link>
                </>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
