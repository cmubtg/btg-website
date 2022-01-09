import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";

import Navigation from "../../components/Navigation";
import BTGCover from "../../images/btg-cover.png";
import Footer from "../../components/Footer";
// import TeamSummary from "../../components/TeamSummary";

class MemberListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: members } = data.allMarkdownRemark

    return (
      <FadeIn>
        <Navigation />

        <Helmet>
          <title>Members | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>

        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">Members</h1>
            </Col>
          </Row>

          <div className="bg-light">
            <Container className="py-5 mt-5">
              <Row>
                <Col>
                  <h4 className="font-weight-bold">Meet the team</h4>

                  <p className="py-5">
                    The CMUBTG combines hands-on technical training and holistic
                    engagement with the technology industry. Our strong community
                    can be found around campus and reinforces our dedicated yet fun
                    culture.
                  </p>
                </Col>
              </Row>

              {/* <TeamSummary /> */}
            </Container>
        </div>        

        <Row>
          <Col>
          {members.map(({ node: member }) => (
            <p>
              <Link
                className="title has-text-primary is-size-4"
                to={member.fields.slug}
              >
                {member.frontmatter.title}
              </Link>            
            </p>
          ))}   
          </Col>
        </Row>
      </Container>

        <Footer />
      </FadeIn>          
      
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
            sort: {order: DESC, fields: [frontmatter___title]}
            filter: {frontmatter: {templateKey: {eq: "member"}}}
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  role
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