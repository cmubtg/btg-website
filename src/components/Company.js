import React from "react";
import Col from "react-bootstrap/Col";

function Company(props) {
  return (
    <Col xs={6} md={3}>
      <div className="company-photo text-center">
        <img
          src={props.company}
          alt={props.name}
          id={props.name}
          className="img-fluid company-svg"
        />
      </div>
    </Col>
  );
}

export default Company;
