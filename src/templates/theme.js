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

const Theme = ({ data }) => {
  const { markdownRemark: theme } = data;
  const photo = getImage(theme.frontmatter.descriptionPhoto)

  // const memberPhoto = getImage()

  let themeInfo = theme.frontmatter.members;
  

  return (
    <Layout>
        <Helmet>
          <title>{theme.frontmatter.title} | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">{theme.frontmatter.title}</h1>
            </Col>
          </Row>
        </Container>

      <Container className="mt-md-1 pt-md-4">        
        <Card className = 'mb-3 align-items-center'>
          <Card.Body>           
            <GatsbyImage image={photo} alt={theme.frontmatter.title} style = {{border: "solid 3px black"}}/>
          </Card.Body>
        </Card>

        <Row>
          <h1 style = {{marginTop:30}}>Team Leads</h1>  
        </Row>
      </Container>        

    </Layout>
  )
}

Theme.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};


export default Theme

export const pageQuery = graphql`
  query ThemeByTitle($id: String!) {
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
        descriptionPhoto {
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }                
      }
    }
  }
`
