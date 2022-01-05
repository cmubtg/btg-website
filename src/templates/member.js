import React, { Component } from 'react';
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Member = ({ data }) => {
  const { markdownRemark: member } = data;
  const photo = getImage(member.frontmatter.photo)

  return (
    <Layout>
      <h1>{member.frontmatter.name}</h1>
      <h1>{member.frontmatter.andrewID}</h1>
      <h1>{member.frontmatter.description}</h1>
      <GatsbyImage image={photo} alt={member.frontmatter.name} />
      <a href={member.frontmatter.resume.publicURL} target="_blank">Resume</a>          
    </Layout>
  )
}

Member.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Member

export const pageQuery = graphql`
  query MemberByAndrewID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        name
        andrewID
        description
        linkedIn
        portfolio
        resume {
          publicURL
        }
        photo {
          childImageSharp {
            gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`