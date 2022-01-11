import React, { Component } from 'react';
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";
import BTGCover from "../images/btg-cover.png";

function getName(text) {
  const result = text
  return result
}

function getAndrewID(text) {
  const result = text
  return result
}

function getPhoto(text) {
  const result = text
  return result
}

const Project = ({ data }) => {
  const { markdownRemark: project } = data;
  const photo = getImage(project.frontmatter.photo)

  // const memberPhoto = getImage()

  let memberInfo = project.frontmatter.members;
  

  return (
    <FadeIn>
    <Helmet>
        <title>Members | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
    </Helmet> 

    <Navigation />   
    
    <Container className="mt-md-5 pt-md-5">
        <Row className="pt-5 mt-5">

        </Row>
    </Container> 

    <Container className="mt-md-1 pt-md-4">
      <h1 className="display-3 text-black font-weight-boldest" style = {{marginBottom: 20}}>{project.frontmatter.title}</h1>
      
      <Card className = 'mb-5 opacity-20 align-items-center' style={{backgroundColor: '#F32E43',color: '#fff',backgroundOpacity:50}}>
        <Card.Body>           
          <GatsbyImage image={photo} alt={project.frontmatter.title} style = {{border:20}}/>
        </Card.Body>
      </Card>

      <small class = 'padded-multipline'style = {{margin: 10, fontSize: 20}}>
        {project.frontmatter.description}
      </small>
      <Row>
        
        <h1 style = {{marginTop:30}}>Members</h1>  
          
      </Row>
      <Row> 
        {memberInfo.map((member) => {
              member = member.substring(1,member.length - 1);
              const info = member.split(',');
              let imgSrc = info[2];
              imgSrc = imgSrc.replace(' ','')
              return (
                <Col style = {{paddingLeft:0, paddingRight:0}}>
                  <div style={{backgroundColor: '#F32E43', width:230, margin:0}}>
                    <img src = {imgSrc} style = {{width:200,height:200,margin:15}}/>
                  </div>,
                  <div style = {{width:'230px', marginRight:0}}>
                    <p style = {{textAlign:'center'}}>{info[0]}</p>
                  </div>
                </Col> 
              )
            })}
      </Row>
            
    </Container>
    


    <Footer />
    </FadeIn>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};


export default Project

export const pageQuery = graphql`
  query ProjectByTitle($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        description
        members
        photo {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 800, height: 400, quality: 100, layout: CONSTRAINED)
          }
        }        
      }
    }
  }
`
