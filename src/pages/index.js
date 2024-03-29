//This is the home page of the CMU BTG website. It gives a short introduction to the club, our mission, and some of our 
//achievements as well as our sponsors.

//Created by David You <dsyou@andrew.cmu.edu>

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
              <Col xs={12} md={3}>
                <h4 className="font-weight-bold">
                  <Badge bg="danger" className="align-bottom">
                    1
                  </Badge>{" "}
                  Mission
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge bg="success" className="align-bottom">
                    2
                  </Badge>{" "}
                  Career Events
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge bg="primary" className="align-bottom">
                    3
                  </Badge>{" "}
                  Programs
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
              software engineers, UI/UX designers, and business analysts. 
              Every team in Product Studio will solve a problem faced by students
              on-campus. The team delivers the final product at the end of the 
              20-week program.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold"><b>Product Management Academy</b></span>
          </Col>
          <Col md={9}>
            <p>
              Product Management Academy is a program dedicated to product management 
              career prep. This program helps juniors and seniors break into product management 
              at the associate level. We help students by guiding them on the interview process,
              prepping with mock interviews, and networking with product managers.
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
