//This is the all-members page. Members can be viewed through their roles via a drop-down menu that only displays
//executives when opened. Each member profile has a link to their individual page.

//Created by Harrison Chui <hchui@andrew.cmu.edu> and David You <dsyou@andrew.cmu.edu>, Designed by Teresa Yang <tyang218@gmail.com>


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
import MySelect from "../../components/MySelect"

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
              "Product Designer":[],
              // "Product Manager":[],
              "Data Scientist":[],
              "Business Analyst":[],
              "Product Management Associate": [],
            }
  members.forEach(
    function(member,index) {
      var r = member.node.frontmatter.role
      if (r.includes("President") || r.includes("Head") || r.includes("Director")) {
        roles["Executive"].push(member)
      }
      var k = check_keys(r,roles)
      if(k!=="") {
        if(r.includes("Lead")){
          roles[k].unshift(member)
        } else{
          roles[k].push(member)
        }
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
    const { data } = this.props
    const { edges: members } = data.allMarkdownRemark
    const roles = get_roles(members)
    const ops = get_options(roles)
    this.state = {
      roles:[ops[0]],
      options:ops
    }
    this.setRoles = this.setRoles.bind(this)
  }

  setRoles(input) {
    this.setState({roles:input})
  }

  render() {
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

          <div>
            <Container className="py-3 mt-2">
              <Row>
                <Col>
                  <p>
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

        <Container className="mt-2">
          <MySelect
            options={this.state.options}
            isMulti
            onChange={this.setRoles}
            allowSelectAll = {true}
            value={this.state.roles}
            placeholder="See all our groups"
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