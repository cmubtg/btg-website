import React from 'react';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Layout from "../../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../../images/btg-cover.png";
import MemberDisplay from "../../components/MemberDisplay"
import { getImage } from 'gatsby-plugin-image';
//import { MultiSelect } from "react-multi-select-component";
import Select from "react-select"

function RoleContainer(props) {
  return (
    <Row className="pt-1 mt-5">
      <h3>{props.role}s</h3>
    {Array.from(props.members).map(({ node:member }) => (
      <MemberDisplay
        title = {member.frontmatter.title}
        role = {member.frontmatter.role}
        degree = {member.frontmatter.degree}
        major = {member.frontmatter.major}
        year = {member.frontmatter.year}
        photo = {getImage(member.frontmatter.photo)}
        slug = {member.fields.slug}
        linkedIn = {member.frontmatter.linkedIn}
      ></MemberDisplay>
    ))}
    </Row>
  )
}

function check_keys(str,dict) {
  for(let s in dict){
    if(str.includes(s)){
      return s
    }
  }
  return ""
}

function get_roles(members) {
  var roles = {"Executive":[],
              "Software Developer":[],
              "UI/UX Designer":[],
              "Product Manager":[],
              "Data Scientist":[],
              "Business Analyst":[]
            }
  members.forEach(
    function(member,index) {
      var r = member.node.frontmatter.role
      if (r.includes("President") || r.includes("Head")) {
        roles["Executive"].push(member)
      }
      var k = check_keys(r,roles)
      if(k!=="") {
        roles[k].push(member)
      }
    }
  )
  return Object.entries(roles)
}

function get_options(roles) {
  var ops = []
  roles.forEach((r) => {
    ops.push({ "label":r[0],"value":r })
  })
  return ops
}

class MemberListTemplate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      roles:[]
    }
    this.setRoles = this.setRoles.bind(this)
  }

  setRoles(input) {
    this.setState({roles:input})
  }

  render() {
    const { data } = this.props
    const { edges: members } = data.allMarkdownRemark
    const roles = get_roles(members)
    const options = get_options(roles)
    return (
      <Layout>
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

        <Container>
        <Select
          options={options}
          value={this.state.roles}
          onChange={this.setRoles}
          isMulti
          closeMenuOnSelect={false}
        />
          {this.state.roles.map((r) => (
            <RoleContainer
              role = {r["value"][0]}
              members = {r["value"][1]}
            />
          ))}
        </Container>
      </Container>

      <Container>

      </Container>

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
      render={(data, count) => <MemberListTemplate data={data} count={count} />}
    />
  )
}