import React, { Component } from 'react';
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import BTGCover from "../images/btg-cover.png";
import Footer from "../components/Footer";

const Alumni = ({ data }) => {
  const {markdownRemark: alumni} = data;
  const photo = getImage(alumni.frontmatter.photo)

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
        <h1 className="display-3 text-black front-weight-boldest">{alumni.frontmatter.title}</h1>
      </Row>
    </Container>

    </FadeIn>
  )
}

Alumni.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Alumni

export const pageQuery = graphql`
  query AlumniByID($id: String!) {
    markdownRemark(id: {eq: $id}){
      id
      frontmatter {
        title
        linkedIn
        year
        degree
        major
        role
        photo {
          childImageSharp {
            gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`