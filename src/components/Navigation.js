import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/btg-logo-white-red.svg";
import GithubCorner from 'react-github-corner';
import { Link } from "gatsby";
import "../css/navigation.css";

function Navigation() {
  // const NavigationStyle = {
  //   textDecoration: 'none',
  // }

  return (
    <div>
      <div className="border-bottom bg-white">
        <Container>
          <Navbar collapseOnSelect expand="sm" className="btg-nav">
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
                <NavDropdown title="Events" id="events-nav-dropdown" className="nav-link-text" renderMenuOnMount>
                  <NavDropdown.Item
                    href="https://prodhacks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ProdHacks
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://btech2025.framer.website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Big Tech Gathering
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/office-trips">
                    Office Trips
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Programs" id="programs-nav-dropdown" className="nav-link-text" renderMenuOnMount>
                  <NavDropdown.Item as={Link} to="/ps">
                    Product Studio
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/pma">
                    Product Management Academy
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/members" className="nav-link-text">
                  Executive Board
                </Nav.Link>
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