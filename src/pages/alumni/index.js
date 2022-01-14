import React from "react";
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import Alum from "../../components/Alum"
import { getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout"

function YearContainer(props) {
  return (
    <Row className="pt-1 mt-5">
      <h3>Class of {props.year}</h3>
      {Array.from(props.alumnis).map(({ node: alumni }) => (
            <Alum
              title = {alumni.frontmatter.title}
              role = {alumni.frontmatter.role}
              degree = {alumni.frontmatter.degree}
              major = {alumni.frontmatter.major}
              photo = {getImage(alumni.frontmatter.photo)}
              linkedIn = {alumni.frontmatter.linkedIn}
            ></Alum>
        ))}
    </Row>
  )
}

function get_years(alums) {
   var years = {}
   alums.forEach(
     function(alum,index) {
      var y = alum.node.frontmatter.year
      if (!years[y]) {
        years[y] = []
      }
      years[y].push(alum)
    }
  )
  return Object.entries(years).sort((a, b) => b[0].localeCompare(a[0]));
  }

class AlumniListTemplate extends React.Component {
  render() {

    const { data } = this.props
    const { edges: alumnis } = data.allMarkdownRemark
    const years = get_years(alumnis)

    return (
      <Layout>

        <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Alumni</h1>
          </Col>
        </Row>
      </Container>

      <Container>
      {years.map((year) => (
        <YearContainer
          year = {year[0]}
          alumnis = {year[1]}
        />
      ))}
      </Container>
    </Layout>
      
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