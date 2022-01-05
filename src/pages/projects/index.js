import React from 'react';
import Layout from "../../components/Layout";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


class ProjectListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      <Layout>
        {projects.map(({ node: project }) => (
          <p>{project.frontmatter.name}</p>
        ))}
      </Layout>
      
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
            sort: {order: DESC, fields: [frontmatter___date]}
            filter: {frontmatter: {templateKey: {eq: "project"}}}
          ) {
            edges {
              node {
                frontmatter {
                  name
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