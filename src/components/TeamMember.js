import React from "react";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function TeamMember(props) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={
        <Popover id="popover-basic">
          <Popover.Header as="h3">
            {props.title}, {props.role}
          <Popover.Body>
          {props.degree},{props.major}
          </Popover.Body>
          </Popover.Header>
        </Popover>
      }
    >
      <Col md={3} sm={6} xs={6} className="p-0">
        <div className="team-photo-wrapper p-0">
          <div className="team-photo">
          <GatsbyImage image={props.photo} alt={props.title}/>
          </div>
          <div className="team-description px-3">
            <h4 className="font-weight-bold">{props.title}</h4>
            <p>
              <small>{props.role}</small>{" "}
              <a className="icon-link" href={props.linkedIn}>
                <FaLinkedinIn />
              </a>
            </p>
          </div>
          <div className="team-gradient"></div>
        </div>
      </Col>
    </OverlayTrigger>
  );
}

export default TeamMember;
