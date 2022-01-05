import React from 'react';
import Layout from "../../components/Layout";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


class MemberListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: members } = data.allMarkdownRemark

    return (
      <Layout>
        {members.map(({ node: member }) => (
          <p>
            <Link
              className="title has-text-primary is-size-4"
              to={member.fields.slug}
            >
              {member.frontmatter.name}
            </Link>            
          </p>

        ))}
      </Layout>
      
    );
  }
}

MemberList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function MemberList() {
  return (
    <StaticQuery
      query={graphql`
        query MemberListQuery {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
            filter: {frontmatter: {templateKey: {eq: "member"}}}
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  name
                  photo {
                    childImageSharp {
                      gatsbyImageData(
                        width: 100
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }              
      `}
      render={(data, count) => <MemberListTemplate data={data} count={count} />}
    />
  )
}