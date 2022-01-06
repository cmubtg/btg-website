import React, { Component } from 'react';
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import BTGCover from "../images/btg-cover.png";
import {LinkedInPhoto, Resume, Email} from "../images/static";
import Footer from "../components/Footer";


const Member = ({ data }) => {
  const { markdownRemark: member } = data;
  const photo = getImage(member.frontmatter.photo)

  return (
    
    <FadeIn>
    <Helmet>
        <title>Members | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
    </Helmet>      
    <Navigation />

    <Container className="mt-md-1 pt-md-4">
      <Row>
        <h1 className="display-3 text-black font-weight-boldest">{member.frontmatter.name}</h1>
      </Row>
      <Row className="pt-1 mt-5">
        <Col xs={8}>
          <h2>About Me</h2>
          <p>{member.frontmatter.description}</p>
        </Col>
        <Col>
          <GatsbyImage image={photo} alt={member.frontmatter.name} />
        </Col>
      </Row>
    </Container>

    <Container className="pt-3 mt-4" style={{backgroundColor: '#ff2f44'}}>
      <Row>
        <Col>
          <div style={{color: 'white'}}>
            <h2>My Experiences</h2>                                        
            <ReactMarkdown>{member.frontmatter.portfolio}</ReactMarkdown>
          </div>                  
        </Col>
      </Row>
    </Container>    

    <Container className="pt-3 mt-3">
      <Row>     
        <Col>
          <h2>Contact Info</h2>
        </Col>                         
      </Row>
      <Container className="mt-1">
        <Row>
          <Col className="mr-3">
            <a href={member.frontmatter.linkedIn} target="_blank"><img src={LinkedInPhoto} alt="LinkedIn" width="75"/></a>           
          </Col>
          <Col className="mr-4">
            <a href={member.frontmatter.resume.publicURL} target="_blank"><img src={Resume} alt="Resume" width="75"/></a>
          </Col>
          <Col className="mr-4">
            <a href={"mailto:"+member.frontmatter.andrewID+"@andrew.cmu.edu"} target="_blank"><img src={Email} alt="Email" width="75"/></a>        
          </Col>                                
        </Row>
      </Container>
    </Container>

    <Footer />
    </FadeIn>
          
  )
}

Member.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Member

export const pageQuery = graphql`
  query MemberByAndrewID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        name
        andrewID
        description
        linkedIn
        portfolio
        resume {
          publicURL
        }
        photo {
          childImageSharp {
            gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`