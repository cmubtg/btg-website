import React from "react";
import Col from "react-bootstrap/Col";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";

function Alum(props) {
  return (
    <Col md={3} sm={6} xs={6} className="p-0">
      <div className="team-photo-wrapper alum-card p-0" tabIndex={0}>
        <div className="team-photo">
          <GatsbyImage image={props.photo} alt={props.title} />
        </div>

        <div className="team-description px-3">
          <h5 className="font-weight-bold mt-md-3">{props.title}</h5>
          <a
            className="icon-link"
            href={props.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="team-gradient"></div>

        {/* hover panel — sits on top of the photo */}
        <div className="alum-overlay px-3">
          <h5 className="font-weight-bold">{props.title}</h5>
          <p className="alum-degree">
            {props.degree}, {props.major}
          </p>
          <p className="alum-role">{props.role}</p>
          <a
            className="icon-link"
            href={props.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </Col>
  );
}

export default Alum;