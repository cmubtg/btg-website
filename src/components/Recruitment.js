import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecruitmentLinks = () => {
    return (
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
            <h2 class="display-6 text-black font-weight-boldest">Recruitment Open!</h2>
            <h4> Get involved in the BTG community through one of our programs </h4>
            </Col>
          </Row>

          <Row className="mt-5">
           
            <Col xs={12} md={6}>
            <h3 class="text-muted font-weight-bold">Product Studio</h3>
                <p>
                Product Studio offers opportunities for software/hardware engineers, data analysts, product analysts and designers 
                in semester-long projects that are perfect for your resume. <b>APPLICATIONS CLOSE SEPTEMBER 12TH</b>
                </p>
                
            </Col>
            <Col xs={12} md={6}>
            <h3 class="text-muted font-weight-bold">Product Management Academy</h3>
                <p>
                Interested in product management and want to learn the ins and outs? Product Management Academy offers students
                interview preparation and hands-on projects that mirror real challenges in the industry. <b>APPLICATIONS CLOSE SEPTEMBER 14TH</b>
                </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
                <form action="https://forms.gle/78TzTvmsdTgvgyRS6" target="_blank">
                    <button 
                        type="submit"
                        class="btn btn-danger shadow-custom-danger btn-large"
                        name="ps-recruitment-form-button"
                    >
                        Apply For PS
                    </button>
                </form>
            </Col>
            <Col xs={12} md={6}>
                <form action="https://forms.gle/QEpWKf2GzaQm98yS8" target="_blank">
                    <button 
                        type="submit"
                        class="btn btn-danger shadow-custom-danger btn-large"
                        name="ps-recruitment-form-button"
                    >
                        Apply For PMA
                    </button>
                </form>
            </Col>
          </Row>

          <Row className="mt-5">
            
            
          </Row>
        </Container>
    )
}

export default RecruitmentLinks;