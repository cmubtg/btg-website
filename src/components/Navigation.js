import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/btg-logo-white-red.svg";
import { Link } from "gatsby";
//import HeaderAnnouncement from "./HeaderAnnouncement";

function Navigation() {
  return (
    <div>
      <div className="border-bottom">
        <Container>
          <Navbar
            collapseOnSelect
            expand="sm"
            bg="white"
            variant="light"
            className="px-0 mx-0 py-0 my-0"
          >
            <Navbar.Brand href="/" className="py-0 my-0">
              <img
                src={LogoColor}
                width="85"
                height="85"
                className="d-inline-block align-top"
                alt="BTG Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
              {/* <Nav className="mr-auto"></Nav> */}
              <div className="mr-auto d-none d-sm-block w-100 py-2 border-bottom">
                <small className="text-muted">
                  CMU Business Technology Group
                </small>
              </div>
              <Nav className="ml-auto">
                <Nav.Link href="/members">
                  <Link className="nav-link-text" to="/members" style={{ textDecoration: 'none' }}>
                    Members
                  </Link>
                </Nav.Link>
                <Nav.Link href="/projects">
                  <Link className="nav-link-text" to="/projects" style={{ textDecoration: 'none' }}>
                    Projects
                  </Link>
                </Nav.Link>
                <Nav.Link href="/alumni">
                  <Link className="nav-link-text" to="/alumni" style={{ textDecoration: 'none' }}>
                    Alumni
                  </Link>
                </Nav.Link>
                <Nav.Link href="/contact">
                  <Link className="nav-link-text" to="/contact" style={{ textDecoration: 'none' }}>
                    Contact
                  </Link>
                </Nav.Link>                
                {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}

export default Navigation;
