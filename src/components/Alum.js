import React from "react";
import Col from "react-bootstrap/Col";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";

function Alum(props) {
  const showDetails = Boolean(props.degree || props.major || props.role);

  return (
    <Col md={3} sm={6} xs={6} className="p-0">
      <div
        className={`team-photo-wrapper p-0 ${showDetails ? "hover-card" : ""}`}
        tabIndex={showDetails ? 0 : undefined}
      >
        <div className="team-photo">
          <GatsbyImage image={props.photo} alt={props.title} />
        </div>

        <div className="team-description px-3">
          <h5 className="font-weight-bold mb-0">{props.title}</h5>
        </div>

        <div className="team-gradient"></div>

        {props.linkedIn && (
          <div className="team-linkedin">
            <a
              className="icon-link"
              href={props.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label={`${props.title} on LinkedIn`}
            >
              <FaLinkedinIn />
            </a>
          </div>
        )}

        {showDetails && (
          <div className="hover-overlay px-3">
            <h5 className="font-weight-bold mb-2">{props.title}</h5>
            <dl className="hover-list mb-0">
              {props.degree && (
                <div className="hover-row">
                  <dt>Degree</dt>
                  <dd>{props.degree}</dd>
                </div>
              )}
              {props.major && (
                <div className="hover-row">
                  <dt>Major</dt>
                  <dd>{props.major}</dd>
                </div>
              )}
              {props.role && (
                <div className="hover-row">
                  <dt>Role</dt>
                  <dd>{props.role}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>
    </Col>
  );
}

export default Alum;