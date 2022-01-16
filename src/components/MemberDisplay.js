import React from "react";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

function MemberDisplay(props) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>{props.title}</Popover.Header>
      <Popover.Body>
      {props.role} <br/> {props.degree}, {props.major} <br/> Class of {props.year}
      </Popover.Body>     
    </Popover>
  );

  return (
    <OverlayTrigger
      placement="right"
      overlay={popover}
    >
      <Col md={3} sm={6} xs={6} className="p-0" onClick={()=>navigate(props.slug)}>
      <div className="team-photo-wrapper p-0">
        <div className="team-photo">
        <GatsbyImage image={props.photo} alt={props.title}/>
        </div>
        <div className="team-description px-3">
          <h5 className="font-weight-bold mt-md-3">{props.title}</h5>
          <a className="icon-link" href={props.linkedIn} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>                  
        </div>
        <div className="team-gradient"></div>
      </div>
      </Col>
    </OverlayTrigger>
  );
}

export default MemberDisplay;