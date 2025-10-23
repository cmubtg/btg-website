import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png";


// This function renders the text description from each project
function ThemeDescriptionText(props) {
  return (
    <div class = 'padded-multiline' style = {{margin:20}}>
      <small style = {{fontSize:15}}>
        {props.description}     
      </small>              
    </div>    
  )
}

// This function renders the white (even) containers for the all project page
function ThemeWhiteContainer(props) {
  return (
    <Row style = {{marginBottom:30}}>          
      <div className = 'border-0' style = {{width:'15rem'}}>
        <GatsbyImage image={props.photo} alt={props.title} style = {{margin:20}}/>
      </div>

      <div className = 'text-right border-0' style = {{width:700}}>
        <a href={props.link} target="_blank">
          <h2 style = {{margin:20, marginBottom:20,color:'#ff2f44'}}><u>{props.title}</u></h2>
        </a>
        <ThemeDescriptionText description={props.description} />
      </div>
    </Row>
  )
}

// This function renders the red (odd) containers for the all project page
function ThemeRedContainer(props) {
  return (
    <Row style = {{marginBottom:30}}>        
      <div className = 'border-0' style = {{backgroundColor:'#ff2f44', color: 'white', width:700}}>
        <Link to={props.slug}>
          <h2 style = {{margin:20, marginBottom:20, color:'white'}}><u>{props.title}</u></h2>
        </Link>
        <ThemeDescriptionText description={props.description} />
      </div>

      <div className = 'border-0' style = {{backgroundColor:'#ff2f44', color: '#white', width:'15rem'}}>
        <GatsbyImage image={props.photo} alt={props.title} style = {{margin:20}}/>
      </div>
    </Row>    
  )
}

// This function renders the all the project containers for the all project page
function ThemeContainer(props) {
  if (props.active === 'T') {
    return <ThemeWhiteContainer 
              title={props.title} 
              description={props.description} 
              photo={props.photo} 
              link={props.link} />
  } else {
    return <ThemeRedContainer 
              title={props.title} 
              description={props.description} 
              photo={props.photo} 
              link={props.link} />
  }
}

// This main function renders the entire all project page
class BTech extends React.Component {
  render() {
    const { data } = this.props
    const { edges: themes } = data.allMarkdownRemark    


    return (
      <Layout>
        <Helmet>
          <title>BTech Gathering | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">Big Tech Gathering</h1>
            </Col>
            <img src={BTGCover} alt="temp btech img"></img>
          </Row>
          <Row className="mt-5">
            <h1 class="display-6 text-black font-weight-boldest">What is Big Tech Gathering?</h1>
            
            <p>
              description
            </p>
          </Row>
        </Container>

        <Container className="mt-md-1 pt-md-4">
          <div className="pt-1 mt-3">
            <Row className="pt-1 mt-5">
              <Col>
              <h2 class="display-6 text-black font-weight-boldest">BTech 2025</h2>
              </Col>
            </Row>

            {themes.map(({ node: theme }, index) => {
              if (theme.frontmatter.active === 'T') {
                return (
                  <ThemeContainer
                    active={theme.frontmatter.active}
                    index={index}
                    title={theme.frontmatter.title}
                    description={theme.frontmatter.overview}
                    photo={getImage(theme.frontmatter.photo)}
                    link={theme.frontmatter.link}
                  />
                );
              }
              return null; // Important: return null for inactive projects
            })}
          </div>

          <div className="pt-1 mt-3">
            <Row className="pt-1 mt-5">
              <Col>
              <h2 class="display-6 text-black font-weight-boldest">Past Themes</h2>
              </Col>
            </Row>

            {themes.map(({ node: theme }, index) => {
              if (theme.frontmatter.active === 'F') {
                return (
                  <ThemeContainer
                    active={theme.frontmatter.active}
                    index={index}
                    title={theme.frontmatter.title}
                    description={theme.frontmatter.overview}
                    photo={getImage(theme.frontmatter.photo)}
                    slug={theme.frontmatter.link}
                  />
                );
              }
              return null; // Important: return null for inactive projects
            })}
          </div>

          
      </Container>
      </Layout>
      
    );
  }
}

ThemeList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function ThemeList() {
  return (
    <StaticQuery
      query={graphql`
        query ThemeListQuery {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___title]}
            filter: {frontmatter: {templateKey: {eq: "theme"}}}
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
                  active
                  link
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
      render={(data, count) => <BTech data={data} count={count} />}
    />
  )
}