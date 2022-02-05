//This is the home page of the CMU BTG website. It gives a short introduction to the club, our mission, and some of our 
//achievements as well as our sponsors.

//Created by David You, Designed by

import React from "react";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Companies from "../components/Companies";
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png";

function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Home | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>
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
            <span className="font-weight-bold"><b>Product Studio</b></span>
          </Col>
          <Col md={9}>
            <p>
              Product Studio is a structured program consisting of teams of 
              product managers, software engineers, data scientists, UI/UX designers, 
              and business analysts. Every team in Product Studio will build a tech product 
              that you will deliver at the end of the 10-week program.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold"><b>Product Explore</b></span>
          </Col>
          <Col md={9}>
            <p>
              Product Explore is a flexible program. Members are free to organize 
              their own teams and work on any problem they want. This is a great 
              entryway for students interested in projects who are unsure about 
              their level of commitment.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="pt-3 mt-5">
        <Row>
          <Col>
            <h4 className="font-weight-bold">Historical achievement</h4>

            <p className="py-4">
              You’re in good company. CMUBTG members and alumni lead, deploy, 
              engineer, and design exciting projects across the industry. 
              Here's where some currently work and have worked.
            </p>
          </Col>
        </Row>

        <Companies />
      </Container>

      </Layout>
  );
}

export default Home;
