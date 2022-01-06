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
        <h1 className="display-3 text-black font-weight-boldest">Project Name</h1>
      </Row>

    </Container>

    <Footer />
    </FadeIn>
  )
}

export default Project

