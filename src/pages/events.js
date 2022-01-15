import Layout from "../components/Layout";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png";

function Events(){
    const calendar = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ff2f44&ctz=America%2FNew_York&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043"
    return(  
      <div>
        <Layout>
        <Helmet>
          <title>Home | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>            
          <Container className="mt-md-1 pt-md-4">
            <Row className="pt-1 mt-5">
              <Col>
                <h1 className="display-3 text-black font-weight-boldest" style = {{marginBottom: 20}}>Events</h1>
              </Col>
            </Row>
            <iframe src={calendar} 
              style={{border:"solid 1px #777", marginTop:"20px"}} 
              width="800" 
              height="600" 
              frameborder="0" 
              scrolling="no" 
              title="BTG Calendar"
            />
            </Container>
        </Layout>
      </div>
    )
}

export default Events
