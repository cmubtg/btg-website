//This page contains a method of users to contact the CMU BTG club. Users can write their name, email, and subject and submit a message to the club.

//Created by David You <dsyou@andrew.cmu.edu>, Designed by Teresa Yang <tyang218@gmail.com>

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../components/Layout"

import emailjs from '@emailjs/browser';
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png";
import PMACohort from "../../static/img/PMA_F25_cohort.png";
import ProdHacks from "../../static/img/prodhacks.png";
import GoogleTrip from "../../static/img/google_trip.png";
import DuolingoTrip from "../../static/img/duolingo_trip.png";
import RecruitmentLinks from "../components/Recruitment"

class PMA extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        name: "",
        email: "",
        message: "",
        subject: ""
      };

    this.serviceID = "service_spe5xqb";
    this.templateID = "template_frd8g5y";    
    this.userID = "user_630XM9CowdEeazima9GIF";
  }


  handleChange = (param, event) => {
    this.setState({ [param]: event.target.value })
  }

  handleSubmit(event) {
    
    event.preventDefault();

    let templateParams = {
      subject: this.state.subject,
      message: this.state.message,
      name: this.state.name,
      email: this.state.email,    
    }

    emailjs.send(
      this.serviceID, 
      this.templateID, 
      templateParams,
      this.userID
    )
        .then((result) => {
          alert("Message Sent! Thank you.")
        })
        .catch((error) => {
          alert(error.text)
        })
  }

  
  render() {
    
    return (
      <Layout>
        <Helmet>
          <title>Product Management Academy | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 class="display-3 text-black font-weight-boldest">
                Product Management Academy
              </h1>
            </Col>
            <img src={PMACohort} alt="pma cohort"></img>
          </Row>
          <Row className="mt-5">
            <p>
              Product Management Academy is dedicated to guiding students through the intricacies of product management, 
              from foundational understanding to successful career entry. We offer comprehensive interview preparation, 
              including mock interviews and hands-on assignments that mirror real challenges product managers face. 
              We position ourselves as proactive question-askers, bringing in industry professionals to offer direct 
              answers and share their intuition as we start developing our own.
            </p>
          </Row>
        </Container>

        <RecruitmentLinks/>
        
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h2 class="display-5 text-black font-weight-boldest">Our Events</h2>
            </Col>
          </Row>

          <Row className="mt-5">
            <h2 class="text-muted font-weight-bold">ProdHacks</h2>
            <p>
              Looking to get project experience, meet fellow students and sleepless nights? Sign up and create in our annual product hackathon! 
            </p>
            {/* <h4 style = {{color:'#ff2f44'}}>past winners link here</h4> */}
            <img src={ProdHacks} alt="prodhacks 2025"></img>
          </Row>

          <Row className="mt-5">
            <h2 class="text-muted font-weight-bold">Google Trip</h2>
            <p>
              Get a guided tour of Google's Pittsburgh office and the opportunity to present your very own projects!
            </p>
            <img src={GoogleTrip} alt="google trip 2025"></img>
          </Row>

          <Row className="mt-5">
            <h2 class="text-muted font-weight-bold">Duolingo Trip</h2>
            <p>
              Possibly go on a tour of the duolingo office in Pittsburgh!
            </p>
            <img src={DuolingoTrip} alt="duolingo trip 2025"></img>
          </Row>
        </Container>

        {/* <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h2 class="display-5 text-black font-weight-boldest">Our Members</h2>
            </Col>
          </Row>

          <Row className="mt-5">
            <h2 class="text-muted font-weight-bold">Current Execs</h2>
            <p>
              grid of current execs like on exec page
            </p>
          </Row>
          
        </Container> */}
      </Layout>
      
    );
  }
}

export default PMA

