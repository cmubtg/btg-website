import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BTechBanner = () => {
    return (
        <Container className="banner-frame">
          <Row>
            <b><h2 class="banner-title">Big Tech Gathering 2025: AI in Action!</h2></b>
            <Col>
                <h4 class="banner-text"> Come meet experts in the field, present your skills in an ideathon, blah blah</h4>
                <h4 class="banner-text"> @ TEP Simmons B on Saturday Nov 22 (12 - 5pm)</h4>
            </Col>
          </Row>

          <Row>
          <Col className="text-end">
                <form action="https://btech2025.framer.website/" target="_blank">
                    <button 
                        type="submit"
                        class="btn btn-white shadow-custom btn-large"
                        name="ps-recruitment-form-button"
                    >
                        Learn More!
                    </button>
                </form>
            </Col>
            
            <Col xs={12} md={6}>
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSeEyOaXYPB9vdhhZUi5JWDriAj7LGixSyc6KV5_W4k2wFxdOg/viewform?usp=dialog" target="_blank">
                    <button 
                        type="submit"
                        class="btn btn-white shadow-custom btn-large"
                        name="ps-recruitment-form-button"
                    > 
                        Register Here!
                    </button>
                </form>
            </Col>
          </Row>
        </Container>
    )
}

export default BTechBanner;