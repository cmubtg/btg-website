import Layout from "../components/Layout";
import React from "react";
import {render} from "react-dom"
import createClass from 'create-react-class'
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Events(){
    
    return(
        
        <div>
          <Layout>
            <Container className="mt-md-1 pt-md-4">
              <Row className="pt-1 mt-5">
                <Col>
                  <h1 className="display-3 text-black font-weight-boldest" style = {{marginBottom: 20}}>Projects</h1>
                </Col>
              </Row>
              <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ff2f44&ctz=America%2FNew_York&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
              </Container>
          </Layout>
            
            
        </div>
    )
}

export default Events