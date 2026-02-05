import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProdHacksBanner = () => {
    return (
        <Container className="banner-frame">
          <Row>
            <b><h1 class="banner-title">ProdHacks 2026!</h1></b>
            <Col>
                <h4 class="banner-text"> Come create <b>Products</b> and <b>Machine Learning</b> solutions as you attend <b>Workshops</b> and <b>Speaker</b> events
                from <b>Industry Sponsors</b> during our week long Product Hackathon!</h4>
                <h4 class="banner-text"> Feb 15th - Feb 22nd (or week calendar here)</h4>
            </Col>
          </Row>

          <Row>
          <Col className="text-end">
                <form action="https://prodhacks.com/" target="_blank">
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
                <form action="https://prodhacks.com/apply" target="_blank">
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

export default ProdHacksBanner;