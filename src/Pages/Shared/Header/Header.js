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
import { BsFillPersonFill } from "react-icons/bs";
import useTitle from "../../../Hooks/useTitle";

const Header = () => {
  const { user, LogOut } = useContext(Authcontext);
  console.log(user);
  useTitle('Home');

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
            <>
              {user.email ? (
                <>
                  <Nav.Link href="#deets">
                    {user?.displayName} {user?.email}
                  </Nav.Link>
                  {user?.photoURL ? (
                    <Link to={"/profile"}>
                      <Image
                        roundedCircle
                        className="me-4"
                        style={{ width: "45px" }}
                        src={user?.photoURL}
                      ></Image>
                    </Link>
                  ) : (
                    <BsFillPersonFill id="useremoji" />
                  )}
                  <Link id="signout" onClick={handleSignOut}>
                    Sign Out
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/register"} className="me-4" id="signout">
                    Register
                  </Link>
                  <Link to={"/login"} id="signout">
                    Login
                  </Link>
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
