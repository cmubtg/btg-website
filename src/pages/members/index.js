// Executives page. Layout follows the board roster: Presidents, Product Studio
// and PMA side by side, ProdHacks, then the rest of the board in rows.

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

const PRESIDENTS = [
  { name: "Sanika Jain", role: "President" },
  { name: "Tanisha Khabe", role: "President" },
];

const PRODUCT_STUDIO = [
  { name: "Skylar Wang", role: "Co-Head of Product Studio" },
  { name: "Wesley Kane", role: "Co-Head of Product Studio", aliases: ["Wesley"] },
];

const PMA = [
  { name: "Sanjitha Govindan", role: "Co-Head of PMA" },
  { name: "Sai Bhandar", role: "Co-Head of PMA" },
];

const PRODHACKS = [
  { name: "Minh Do", role: "Head of ProdHacks" },
  { name: "Amy Cha", role: "ProdHacks Design Chair" },
  { name: "Sadhil Mehta", role: "ProdHacks Events Chair" },
  { name: "Zhiyuan Guo Liau", role: "ProdHacks Sponsorship Chair" },
];

const OUTREACH_ROW = [
  { name: "Benjy McHale", role: "Head of Big Tech Gathering" },
  { name: "Elizabeth Hsu", role: "Head of Outreach" },
  { name: "Trish Harsono", role: "Head of Outreach", photoPosition: "center top" },
];

const FINANCE_SOCIAL_MARKETING = [
  { name: "Jamie Jane Figueroa Weston", role: "Social Chair" },
  { name: "Kashish Sindhwani", role: "Head of Finance" },
  { name: "Riya Shenvi", role: "Head of Marketing" },
];

const DESIGN = [
  { name: "Andrea Guo", role: "Design Chair", photoPosition: "center 35%" },
  { name: "Annabelle Chow", role: "Design Chair" },
  { name: "Lily Kim", role: "Design Chair" },
  { name: "Lydia Synn", role: "Design Chair" },
];

function findMember(members, person) {
  const names = [person.name, ...(person.aliases || [])].map((name) =>
    name.toLowerCase()
  );
  return members.find(({ node }) => {
    const title = (node.frontmatter.title || "").toLowerCase();
    const fullName = (node.frontmatter.name || "").toLowerCase();
    return names.includes(title) || names.includes(fullName);
  });
}

function ExecCard({ person, members }) {
  const match = findMember(members, person);
  const member = match && match.node;
  const photo = member ? getImage(member.frontmatter.photo) : null;

  return (
    <MemberDisplay
      title={person.name}
      role={person.role}
      degree={member && member.frontmatter.degree}
      major={member && member.frontmatter.major}
      year={member && member.frontmatter.year}
      photo={photo}
      slug={member && member.fields.slug}
      linkedIn={member && member.frontmatter.linkedIn}
      placeholder={!photo}
      photoPosition={person.photoPosition}
    />
  );
}

function PersonRow({ people, members, centered }) {
  return (
    <div className={centered ? "exec-grid exec-grid-center" : "exec-grid"}>
      {people.map((person) => (
        <ExecCard
          key={`${person.name}-${person.role}`}
          person={person}
          members={members}
        />
      ))}
    </div>
  );
}

function ShoutOutSection({ title, people, members, centered }) {
  return (
    <div className={centered ? "pt-1 mt-5 exec-section-center" : "pt-1 mt-5"}>
      <h3>{title}</h3>
      <PersonRow people={people} members={members} centered={centered} />
    </div>
  );
}

class MemberListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: members } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet>
          <title>Executives | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">Executives</h1>
            </Col>
          </Row>

          <ShoutOutSection
            title="Presidents"
            people={PRESIDENTS}
            members={members}
            centered
          />

          <div className="pt-1 mt-5">
            <div className="exec-programs-headings">
              <h3>Product Studio</h3>
              <h3>Product Management Academy</h3>
            </div>
            <div className="exec-grid">
              {PRODUCT_STUDIO.map((person) => (
                <ExecCard
                  key={`${person.name}-${person.role}`}
                  person={person}
                  members={members}
                />
              ))}
              {PMA.map((person) => (
                <ExecCard
                  key={`${person.name}-${person.role}`}
                  person={person}
                  members={members}
                />
              ))}
            </div>
          </div>

          <ShoutOutSection
            title="ProdHacks Committee"
            people={PRODHACKS}
            members={members}
          />

          <div className="pt-1 mt-5">
            <PersonRow people={OUTREACH_ROW} members={members} centered />
            <PersonRow people={FINANCE_SOCIAL_MARKETING} members={members} centered />
            <PersonRow people={DESIGN} members={members} />
          </div>
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
                  name
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
