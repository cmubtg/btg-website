import React from "react";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'

import Companies from "../components/Companies";
import Layout from "../components/Layout"

function Home() {
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 class="display-3 text-black font-weight-boldest">
              We build the cutting edge
            </h1>

            <h2 class="text-muted font-weight-bold">
              We are the CMU Business Technology Group
            </h2>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5">
          <Col md={3}>
            <p>
              We specialize in applied technology that improves work, play, and
              education.
            </p>
          </Col>

          <Col md={9}>
            <p>
              Our mission is to provide undergraduates interested in business and
              technology with real-world projects, a strong understanding of potential
              career paths, and offer them opportunities to gain hands-on experience
              in their areas of interest.
            </p>

            <Row className="mt-5 py-3">
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge bg="danger" className="align-bottom">
                    2
                  </Badge>{" "}
                  Divisions
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge bg="success" className="align-bottom">
                    10
                  </Badge>{" "}
                  Workshops
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge bg="primary" className="align-bottom">
                    2
                  </Badge>{" "}
                  Career Events
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold">Product Studio&nbsp;</span>
          </Col>
          <Col md={9}>
            <p>
              Inforomation about product studio here.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold">Product Explore&nbsp;</span>
          </Col>
          <Col md={9}>
            <p>
            Inforomation about product explore here.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5 mt-5">
        <Row>
          <Col>
            <h4 className="font-weight-bold">Historical achievement</h4>

            <p className="py-5">
              You’re in good company. Whatever your goals may be, CMUBTG can
              support and guide you towards your highest potential. CMUBTG
              members and alumni lead, deploy, and design exciting projects
              across the industry. Here's where some currently work and have worked.
            </p>
          </Col>
        </Row>

        <Companies />
      </Container>

      </Layout>
  );
}

export default Home;
