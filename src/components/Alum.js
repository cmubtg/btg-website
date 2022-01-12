import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image"

function Alum(props) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>{props.title}</Popover.Header>
      <Popover.Body>
        {props.degree}, {props.major} <br/> {props.role}
      </Popover.Body>     
    </Popover>
  );

  return (
    <OverlayTrigger
      placement="right"
      overlay={popover}
    >
      <Col md={3} sm={6} xs={6} className="p-0">
        <div className="team-photo-wrapper p-0">
          <div className="team-photo">
          <GatsbyImage image={props.photo} alt={props.title}/>
          </div>
          <div className="team-description px-3">
            <h5 className="font-weight-bold mt-md-3">{props.title}</h5>
            <a className="icon-link" href={props.linkedIn}>
              <FaLinkedinIn />
            </a>                  
          </div>
          <div className="team-gradient"></div>
        </div>
      </Col>
    </OverlayTrigger>
  );
}

export default Alum;
