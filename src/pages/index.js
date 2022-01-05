import React from "react";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FadeIn from "react-fade-in";
import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import TeamSummary from "../components/TeamSummary";
import Companies from "../components/Companies";


// ReactGA.initialize("UA-104764221-10");
// ReactGA.pageview(window.location.pathname + window.location.search);

function Home() {
  return (
    <FadeIn>
      {/* <Helmet>
        <title>Home Page | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet> */}

      <Layout>

      <Container className="mt-md-5 pt-md-5">
        <Row className="pt-5 mt-5">
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
                  <Badge variant="danger" className="align-bottom">
                    2
                  </Badge>{" "}
                  Divisions
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge variant="success" className="align-bottom">
                    10
                  </Badge>{" "}
                  Workshops
                </h4>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="font-weight-bold">
                  <Badge variant="primary" className="align-bottom">
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
            <span className="font-weight-bold">BTG Analytics&nbsp;</span>
          </Col>
          <Col md={9}>
            <p>
              Applied artificial intelligence and machine learning research and
              inference into massive public datasets. Work with your team to
              produce a unique report under the mentorship of an experienced
              member. Background knowledge in AI/ML not necessary, but general
              programming experience preferred.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3}>
            <span className="font-weight-bold">BTG Digital&nbsp;</span>
          </Col>
          <Col md={9}>
            <p>
              Create compelling digital services and products that the campus community will use. Use industry standard web development languages and product development techniques to build and iterate. Previous experience in web development not necessary.
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

      <div className="bg-light">
        <Container className="py-5 mt-5">
          <Row>
            <Col>
              <h4 className="font-weight-bold">Meet the team</h4>

              <p className="py-5">
                The CMUBTG combines hands-on technical training and holistic
                engagement with the technology industry. Our strong community
                can be found around campus and reinforces our dedicated yet fun
                culture.
              </p>
            </Col>
          </Row>

          {/* <TeamSummary /> */}
        </Container>
      </div>

      </Layout>
    </FadeIn>
  );
}

export default Home;
