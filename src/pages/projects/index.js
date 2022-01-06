import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import BTGCover from "../../images/btg-cover.png";


class ProjectListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      <FadeIn>
        <Navigation />

        <Helmet>
          <title>Projects | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>

        <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {projects.map(({ node: project }) => (
              <p>{project.frontmatter.title}</p>
            ))}          
          </Col>
        </Row>
      </Container>

        <Footer />
      </FadeIn>      
 
      
    );
  }
}

ProjectList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function ProjectList() {
  return (
    <StaticQuery
      query={graphql`
        query ProjectListQuery {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___title]}
            filter: {frontmatter: {templateKey: {eq: "project"}}}
          ) {
            edges {
              node {
                frontmatter {
                  title
                }
              }
            }
          }
        }              
      `}
      render={(data, count) => <ProjectListTemplate data={data} count={count} />}
    />
  )
}