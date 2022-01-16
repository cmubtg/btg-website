import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import LogoGray from "../images/btg-logo-gray.svg";
import MailchimpForm from "../components/MailchimpForm";



const SocialMedia = () => {
  return (
    <Col>
      <Button
        variant="light"
        href="https://facebook.com/cmubtg"
        target="_blank"
        className="mr-1"
      >
        <FaFacebookF />
      </Button>
      <Button
        variant="light"
        href="https://instagram.com/cmubtg"
        target="_blank"
        className="mr-1"
      >
        <FaInstagram />
      </Button>
      <Button
        variant="light"
        href="https://github.com/cmubtg"
        target="_blank"
        className="mr-1"
      >
        <FaGithub />
      </Button>
      <Button
        variant="light"
        href="https://linkedin.com/company/cmubtg"
        target="_blank"
        className="mr-1"
      >
        <FaLinkedinIn />
      </Button>
    </Col>
  )
}

const LeftFooter = () => {
  return (
    <Container>
      <Row className="text-secondary mt-2">
        <small>
          Want to reach out? Send us a line at{" "}
          <a href="mailto:info@cmubtg.com" target="_blank" rel="noopener noreferrer">info@cmubtg.com</a>
        </small>        
      </Row>   
      <Row className="mt-2">
        <a href="https://github.com/cmubtg/btg-website/blob/master/CODE_OF_CONDUCT.md"
          target="_blank" 
          rel="noreferrer"
          class="link-secondary"
        >
          <small>Code of Conduct</small>          
        </a>
      </Row>
      <Row className="mt-3">
        <SocialMedia />
      </Row>   
    </Container>
  )
}

const Logo = () => {
  return (
    <Row className="mt-4">
      <Col className="text-center">
        <img src={LogoGray} alt="" width="50" height="50" />
      </Col>
  </Row>   
  )
}
const Footer = () => {
  return (
    <div className="mt-5 border-top bg-white">
      <Container className="py-3 mt-3" id="contact">
        <Row>
          <Col>
            <LeftFooter />
          </Col>
          <Col>
            <MailchimpForm />         
          </Col>
        </Row>
        <Logo />
      </Container>
    </div>

  );
};

export default Footer;
