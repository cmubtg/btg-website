import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image"

function MemberDisplay(props) {
  const placeholder = props.placeholder || !props.photo;

  const card = (
    <div className="exec-card">
      <div className={placeholder ? "team-photo-wrapper p-0" : "team-photo-wrapper-point p-0"}>
        <div className="team-photo">
          {props.photo ? (
            <GatsbyImage
              image={props.photo}
              alt={props.title}
              imgStyle={props.photoPosition ? { objectPosition: props.photoPosition } : undefined}
            />
          ) : (
            <div className="exec-placeholder-photo">Photo</div>
          )}
        </div>
        <div className="team-description px-3">
          <h5 className="font-weight-bold mt-md-3 mb-0">{props.title}</h5>
          {props.role && <p className="team-role mb-1">{props.role}</p>}
          {props.linkedIn && (
            <a className="icon-link" href={props.linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          )}
        </div>
        <div className="team-gradient"></div>
      </div>
    </div>
  );

  if (placeholder || !props.degree) {
    return card;
  }

  const popover = (
    <Popover id="exec-popover">
      <Popover.Body className="exec-popover-body">
        <dl className="exec-popover-list">
          <div className="exec-popover-row">
            <dt>Degree</dt>
            <dd>{props.degree}</dd>
          </div>
          <div className="exec-popover-row">
            <dt>Major</dt>
            <dd>{props.major}</dd>
          </div>
          <div className="exec-popover-row">
            <dt>Class of</dt>
            <dd>{props.year}</dd>
          </div>
        </dl>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger placement="right" overlay={popover}>
      {card}
    </OverlayTrigger>
  );
}

export default MemberDisplay;
