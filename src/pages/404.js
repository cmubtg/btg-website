import * as React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { Helmet } from "react-helmet";
import BTGCover from "../images/btg-cover.png";


const NotFoundPage = () => (
  <FadeIn>
    <Helmet>
      <title>404 Page Not Found | CMUBTG</title>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:image" content={BTGCover}></meta>
    </Helmet>

    <Navigation />

    <Container className="mt-md-1 pt-md-4">
      <Row className="pt-1 mt-5">
        <Col>
          <h1 className="display-3 text-black font-weight-boldest">Page Not Found</h1>
        </Col>
      </Row>      

      <Row className="pt-1 mt-5">
        <Col>
          <h4>We're sorry but the page you're looking for does not exist.</h4>
        </Col>        
      </Row>  

    </Container>    
    <Footer />

  </FadeIn>
);

export default NotFoundPage;
