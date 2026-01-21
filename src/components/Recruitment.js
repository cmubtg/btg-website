import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from '../images/recruitment_calendar_S26.png';

const RecruitmentLinks = () => {
    // const calendar = "https://calendar.google.com/calendar/embed?src=c_484688068b353066cae993edb0bf39fc4d8209f7e0f9dac2a6c6bd8bda6b521d%40group.calendar.google.com&ctz=America%2FNew_York"
    return (
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <h2 class="display-6 text-black font-weight-boldest">Recruitment Open!</h2>
            <Col>
                <h4> Get involved in the BTG community through one of our programs </h4>
            </Col>
            {/* <Col>
                <form action="https://docs.google.com/forms/d/1CJpzhvEA2CuCHqO4AtmbTqdnhoDD0a7RYyx4SqQkjPg/viewform?edit_requested=true" target="_blank">
                    <button 
                        type="submit"
                        class="btn btn-danger shadow-custom-danger btn-large"
                        name="ps-recruitment-form-button"
                    >
                        Interest Form
                    </button>
                </form>
            </Col> */}
          </Row>
          {/* <iframe src={calendar} 
              style={{border:"0", marginTop:"20px"}} 
              width="800" 
              height="600" 
              frameborder="0" 
              scrolling="no" 
              title="BTG Calendar"
            /> */}
          <img src={Calendar} 
               alt="BTG Calendar" style={{marginTop: "20px", width: "80%", marginLeft: "10%", marginRight: "10%"}}> 
          </img>
          <Row className="mt-5">
           
            <Col xs={12} md={6}>
            <h3 class="text-muted font-weight-bold">Product Studio</h3>
                <p>
                Product Studio offers opportunities this semester for software/hardware engineers, and data analysts 
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
                <form action="https://forms.gle/qnMhoFun6TsieSSt6" target="_blank">
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
                <form action="https://docs.google.com/forms/d/e/1FAIpQLScG6H99Cbei_9_APwhf7G2SZqche06I3iqKr-e73wPg7bko5w/viewform" target="_blank">
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