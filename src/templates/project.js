import React, { Component } from 'react';
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";
import BTGCover from "../images/btg-cover.png";

const Project = ({ data }) => {
  const { markdownRemark: project } = data;
  const photo = getImage(project.frontmatter.photo)

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
        <h1 className="display-3 text-black font-weight-boldest">{project.frontmatter.title}</h1>
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
        member
        photo {
          childImageSharp {
            gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
          }
        }        
      }
    }
  }
`
