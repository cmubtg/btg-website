//This is the template for the individual member page. Every member in BTG is linked with their andrewid and their page
//displays their name, a short "about me" statement, their experiences, as well as a linkedin link, resume, and email.

//Created by David You <dsyou@andrew.cmu.edu>, Designed by Sahaja Danthurthy <sahajad03@gmail.com>

import React from 'react';
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {LinkedInPhoto, Resume, Email} from "../images/static";
import Layout from "../components/Layout";
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png"

const Member = ({ data }) => {
  const { markdownRemark: member } = data;
  const photo = getImage(member.frontmatter.photo)

  return (
    <Layout>
      <Helmet>
        <title>{member.frontmatter.title} | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>
      <Container className="mt-md-1 pt-md-4">
        <Row>
          <h1 className="display-3 text-black font-weight-boldest">{member.frontmatter.title}</h1>
        </Row>
        <Row className="pt-1 mt-5">
          <Col xs={8}>
            <h2>About Me</h2>
            <p>{member.frontmatter.description}</p>
          </Col>
          <Col>
            <GatsbyImage image={photo} alt={member.frontmatter.title} />
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
              <a href={member.frontmatter.linkedIn} 
                target="_blank" 
                rel="noreferrer">
                <img src={LinkedInPhoto} 
                  alt="LinkedIn" 
                  width="75"/>
              </a>           
            </Col>
            <Col className="mr-4">
              <a href={member.frontmatter.resume.publicURL}
                target="_blank" 
                rel="noreferrer">
                <img src={Resume} 
                  alt="Resume" 
                  width="75"/>
              </a>
            </Col>
            <Col className="mr-4">
              <a href={"mailto:"+member.frontmatter.andrewID+"@andrew.cmu.edu"} 
                target="_blank" rel="noreferrer">
                <img src={Email} 
                  alt="Email" 
                  width="75"/>
              </a>        
            </Col>                                
          </Row>
        </Container>
      </Container>
    </Layout>



          
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