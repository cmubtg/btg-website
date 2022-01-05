import React, { Component } from 'react';
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";


class Temp extends Component {
  render() {
    return (
      <Layout>
        <h1>Hello world!</h1>
      </Layout>
      
    );
  }
}

export default Temp;