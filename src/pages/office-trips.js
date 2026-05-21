import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import BTGCover from "../images/btg-cover.png";

function OfficeTrips() {
  return (
    <Layout>
      <Helmet>
        <title>Office Trips | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Office Trips</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="pt-1 mt-3">
          <Col>
            <p className="text-muted">
              Content for office trips will be added here soon.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default OfficeTrips;
