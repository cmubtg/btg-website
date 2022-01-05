import React, { Component } from 'react';
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Project = ({ data }) => {
  return (
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  )
}

export default Project

