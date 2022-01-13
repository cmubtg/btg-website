import React from 'react';
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Layout from "../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png"

const Project = ({ data }) => {
  const { markdownRemark: project } = data;
  const photo = getImage(project.frontmatter.photo)

  // const memberPhoto = getImage()

  let memberInfo = project.frontmatter.members;
  

  return (
    <Layout>
        <Helmet>
          <title>{project.frontmatter.title} | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">{project.frontmatter.title}</h1>
            </Col>
          </Row>
        </Container>

      <Container className="mt-md-1 pt-md-4">        
        <Card className = 'mb-5 align-items-center' style={{backgroundColor: '#F32E43',color: '#fff',backgroundOpacity:50}}>
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
      </Container>        

      <Container>
        <Row> 
          {memberInfo.map((member) => {
              member = member.substring(1,member.length - 1);
              const info = member.split(',');
              const fullName = info[0]
              const role = info[3]
              const andrewID = String(info[1].substring(1))
              const imgSrc = info[2].substring(1)
              const popover = (
                <Popover id="popover-basic">
                  <Popover.Header>{fullName}</Popover.Header>
                  <Popover.Body>
                    {role}
                  </Popover.Body>     
                </Popover>
              );
              return (
                <OverlayTrigger placement = 'right' overlay = {popover}>
                  <Col md={3} sm={6} xs={6} lg = {3} className="p-0 m-0 g-0">
                    <Link to={'/members/' + andrewID}>
                      <img src={imgSrc} alt={fullName} style={{width:240,height:240,marginBottom:20}}/>
                    </Link> 
                  </Col> 
                </OverlayTrigger>
              )
            })}
        </Row>
              
      </Container>

    </Layout>

    

    


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
