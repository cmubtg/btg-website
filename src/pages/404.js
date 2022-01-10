import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"

const NotFoundPage = () => (
    <Layout>
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
    </Layout>
);

export default NotFoundPage;
