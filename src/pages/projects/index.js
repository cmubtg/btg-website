//This is the all-projects page. Each active project in BTG is displayed with a picture and a short description of what that project
//is doing and their goals. Clicking the title of the project will take the user to its respective project page.

//Created by Daniel Chen <dc2@andrew.cmu.edu> and David You <dsyou@andrew.cmu.edu>, Designed by Teresa Yang <tyang218@gmail.com>

import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../../images/btg-cover.png";

// This function renders the text description from each project
function ProjectDescriptionText(props) {
  return (
    <div class = 'padded-multiline' style = {{margin:20}}>
      <small style = {{fontSize:15}}>
        {props.description}     
      </small>              
    </div>    
  )
}

// This function renders the white (even) containers for the all project page
function WhiteContainer(props) {
  return (
    <Row style = {{marginBottom:30}}>          
      <div className = 'border-0' style = {{width:'15rem'}}>
        <GatsbyImage image={props.photo} alt={props.title} style = {{margin:20}}/>
      </div>

      <div className = 'text-right border-0' style = {{width:700}}>
        <Link to={props.slug}>
          <h2 style = {{margin:20, marginBottom:20,color:'#ff2f44'}}><u>{props.title}</u></h2>
        </Link>
        <ProjectDescriptionText description={props.description} />
      </div>
    </Row>
  )
}

// This function renders the red (odd) containers for the all project page
function RedContainer(props) {
  return (
    <Row style = {{marginBottom:30}}>        
      <div className = 'border-0' style = {{backgroundColor:'#ff2f44', color: 'white', width:700}}>
        <Link to={props.slug}>
          <h2 style = {{margin:20, marginBottom:20, color:'white'}}><u>{props.title}</u></h2>
        </Link>
        <ProjectDescriptionText description={props.description} />
      </div>

      <div className = 'border-0' style = {{backgroundColor:'#ff2f44', color: '#white', width:'15rem'}}>
        <GatsbyImage image={props.photo} alt={props.title} style = {{margin:20}}/>
      </div>
    </Row>    
  )
}

// This function renders the all the project containers for the all project page
function ProjectContainer(props) {
  if (props.index % 2 === 0) {
    return <WhiteContainer 
              title={props.title} 
              description={props.description} 
              photo={props.photo} 
              slug={props.slug} />
  } else {
    return <RedContainer 
              title={props.title} 
              description={props.description} 
              photo={props.photo} 
              slug={props.slug} />
  }
}

// This main function renders the entire all project page
class ProjectListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark    


    return (
      <Layout>
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
        
          <div className="pt-1 mt-3">
            {projects.map(({ node: project }, index) => (
              <ProjectContainer 
                index={index} 
                title={project.frontmatter.title}
                description={project.frontmatter.overview}
                photo={getImage(project.frontmatter.photo)}
                slug={project.fields.slug}
              />
            ))}    
          </div>
      

      </Container>

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
            sort: {order: DESC, fields: [frontmatter___title]}
            filter: {frontmatter: {templateKey: {eq: "project"}}}
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  overview
                  description
                  photo {
                    childImageSharp {
                      gatsbyImageData(width: 200, quality: 100, layout: CONSTRAINED)
                    }
                  }                  
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