import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecruitmentLinks = () => {
    const calendar = "https://calendar.google.com/calendar/embed?src=c_484688068b353066cae993edb0bf39fc4d8209f7e0f9dac2a6c6bd8bda6b521d%40group.calendar.google.com&ctz=America%2FNew_York"
    return (
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <h2 class="display-6 text-black font-weight-boldest">Recruitment Open!</h2>
            <Col>
                <h4> Get involved in the BTG community through one of our programs </h4>
            </Col>
            <Col>
                <form action="https://docs.google.com/forms/d/1CJpzhvEA2CuCHqO4AtmbTqdnhoDD0a7RYyx4SqQkjPg/viewform?edit_requested=true" target="_blank">
                    <button 
                        type="submit"
                        class="btn btn-danger shadow-custom-danger btn-large"
                        name="ps-recruitment-form-button"
                    >
                        Interest Form
                    </button>
                </form>
            </Col>
          </Row>
          <iframe src={calendar} 
              style={{border:"0", marginTop:"20px"}} 
              width="800" 
              height="600" 
              frameborder="0" 
              scrolling="no" 
              title="BTG Calendar"
            />

          <Row className="mt-5">
           
            <Col xs={12} md={6}>
            <h3 class="text-muted font-weight-bold">Product Studio</h3>
                <p>
                Product Studio offers opportunities for software/hardware engineers, data analysts, product analysts and designers 
                in semester-long projects that are perfect for your resume. <b>APPLICATIONS CLOSE JANUARY 26TH</b>
                </p>
                
            </Col>
            <Col xs={12} md={6}>
            <h3 class="text-muted font-weight-bold">Product Management Academy</h3>
                <p>
                Interested in product management and want to learn the ins and outs? Product Management Academy offers students
                interview preparation and hands-on projects that mirror real challenges in the industry. <b>APPLICATIONS CLOSE FEBRUARY 1ST</b>
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