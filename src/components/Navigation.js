import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/btg-logo-white-red.svg";
import GithubCorner from 'react-github-corner';
import { Link } from "gatsby";

function Navigation() {
  // const NavigationStyle = {
  //   textDecoration: 'none',
  // }

  return (
    <div>
      <div className="border-bottom bg-white">
        <Container>
          <Navbar collapseOnSelect expand="sm">
            <Link to="/">
              <Navbar.Brand className="py-0 my-0">
                <img
                  src={LogoColor}
                  width="85"
                  height="85"
                  className="d-inline-block align-top"
                  alt="BTG Logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
              <div className="mr-auto d-none d-sm-block w-100 py-2 border-bottom">
                <small className="text-muted">
                  CMU Business Technology Group
                </small>
              </div>
              <Nav className="ml-auto">
                {/* <Nav.Link as={Link} to="www.google.com" className="nav-link-text">
                  BTech
                </Nav.Link> */}
                {/* remove below BTech after 2025 */}
                <Nav.Link href="https://www.google.com/" target="_blank" className="nav-link-text">
                    BTech
                </Nav.Link>
                
                <Nav.Link as={Link} to="/ps" className="nav-link-text">
                  PS
                </Nav.Link>
                <Nav.Link as={Link} to="/pma" className="nav-link-text">
                  PMA
                </Nav.Link>
                <Nav.Link as={Link} to="/members" className="nav-link-text">
                  Exec
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/events" className="nav-link-text">
                  Events
                </Nav.Link> */}
                <Nav.Link as={Link} to="/alumni" className="nav-link-text">
                  Alumni
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        {/* <GithubCorner
          href="https://github.com/cmubtg/btg-website"
          bannerColor="#ff2f44"
          octoColor="#fff"
          size={60}
          direction="left"
          target="_blank"
        /> */}
      </div>
    </div>
  );
}

export default Navigation;