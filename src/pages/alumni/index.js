import React from "react";
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
import TeamMember from "../../components/TeamMember"
import { getImage } from "gatsby-plugin-image";

class AlumniListTemplate extends React.Component {
  render() {

    const { data } = this.props
    const { edges: alumnis } = data.allMarkdownRemark

    return (
      <FadeIn>
        <Navigation />

        <Helmet>
          <title>Alumni | CMUBTG</title>
        < meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>

        <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Alumni</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {alumnis.map(({ node: alumni }) => (
            <TeamMember
              title = {alumni.frontmatter.title}
              role = {alumni.frontmatter.role}
              degree = {alumni.frontmatter.degree}
              major = {alumni.frontmatter.major}
              photo = {getImage(alumni.frontmatter.photo)}
              linkedIn = {alumni.frontmatter.linkedIn}
            ></TeamMember>
          ))}
        </Row>
      </Container>
        <Footer />
      </FadeIn>
      
    );
  }
}

AlumniList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function AlumniList() {
  return (
    <StaticQuery
      query={graphql`
        query AlumniListQuery {
          allMarkdownRemark(
            sort: {order: DESC,fields: [frontmatter___title]}
            filter: {frontmatter: {templateKey: {eq: "alumni"}}}
          ){
            edges {
              node{
              frontmatter {
                title
                linkedIn
                year
                degree
                major
                role
                photo {
                  childImageSharp {
                    gatsbyImageData(
                      width: 250
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
      render={(data,count) => <AlumniListTemplate data={data} count={count} />}
    />
  )
}