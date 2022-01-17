import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/btg-logo-white-red.svg";

import GithubCorner from 'react-github-corner';
import { Link } from "gatsby";




function Navigation() {

  const NavigationStyle = {
    textDecoration: 'none',
  }

  return (
    <div>
      <div className="border-bottom bg-white">
        <Container>
          <Navbar
            collapseOnSelect
            expand="sm"
            //className="px-0 mx-0 py-0 my-0"
          >
            <Link to="/">
              <Navbar.Brand href="/" className="py-0 my-0">
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
              {/* <Nav className="mr-auto"></Nav> */}
              <div className="mr-auto d-none d-sm-block w-100 py-2 border-bottom">
                <small className="text-muted">
                  CMU Business Technology Group
                </small>
              </div>
              <Nav className="ml-auto">
                <Link className="nav-link-text" to="/members" style={NavigationStyle}>
                  <Nav.Link as="span" href="/members"> 
                    Members
                  </Nav.Link>
                </Link>                  
                <Link className="nav-link-text" to="/projects" style={NavigationStyle}>
                  <Nav.Link as="span" href="/projects"> 
                    Projects
                  </Nav.Link>
                </Link>
                <Link className="nav-link-text" to="/events" style={NavigationStyle}>
                  <Nav.Link as="span" href="/events"> 
                    Events
                  </Nav.Link>
                </Link>                     
                <Link className="nav-link-text" to="/alumni" style={NavigationStyle}>
                  <Nav.Link as="span" href="/alumni"> 
                    Alumni
                  </Nav.Link>
                </Link>                       
                <Link className="nav-link-text" to="/contact" style={NavigationStyle}>
                  <Nav.Link as="span" href="/contact"> 
                    Contact
                  </Nav.Link>
                </Link>              
                {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <GithubCorner
          href="https://github.com/cmubtg/btg-website"
          bannerColor="#ff2f44"
          octoColor="#fff"
          size={60}
          direction="left" 
          target="_blank"
        />
      </div>
    </div>
  );
}

export default Navigation;
