import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";

function MemberDisplay(props) {
  const placeholder = props.placeholder || !props.photo;
  const showDetails = !placeholder && Boolean(props.degree);

  return (
    <div className="exec-card">
      <div
        className={`${
          placeholder ? "team-photo-wrapper" : "team-photo-wrapper-point"
        } p-0 ${showDetails ? "hover-card" : ""}`}
        tabIndex={showDetails ? 0 : undefined}
      >
        <div className="team-photo">
          {props.photo ? (
            <GatsbyImage
              image={props.photo}
              alt={props.title}
              imgStyle={
                props.photoPosition
                  ? { objectPosition: props.photoPosition }
                  : undefined
              }
            />
          ) : (
            <div className="exec-placeholder-photo">Photo</div>
          )}
        </div>

        <div className="team-description px-3">
          <h5 className="font-weight-bold mb-0">{props.title}</h5>
          {props.role && <p className="team-role mb-0">{props.role}</p>}
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
            <h5 className="font-weight-bold mb-1">{props.title}</h5>
            {props.role && <p className="hover-role mb-2">{props.role}</p>}
            <dl className="hover-list mb-0">
              <div className="hover-row">
                <dt>Degree</dt>
                <dd>{props.degree}</dd>
              </div>
              {props.major && (
                <div className="hover-row">
                  <dt>Major</dt>
                  <dd>{props.major}</dd>
                </div>
              )}
              {props.year && (
                <div className="hover-row">
                  <dt>Class of</dt>
                  <dd>{props.year}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}

export default MemberDisplay;