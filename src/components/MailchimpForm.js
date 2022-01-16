import React from "react";
import Container from "react-bootstrap/Container";

const MailchimpForm = () => {
  const mailchimp = {
    position: "absolute",
    left: "-5000px"
  };

  return (
    <Container>
      <div id="mc_embed_signup" className="py-3">
        <form
          action="https://cmu.us20.list-manage.com/subscribe/post?u=2f77ab610640a97c09a7c2193&amp;id=17948cdb23"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div className="form-row">
            <div className="col-md-15">
              <div className="mc-field-group form-group">
                {/* <label for="mce-EMAIL"></label> */}
                <input
                  type="email"
                  placeholder="> Subscribe to our Mailing List"
                  name="email"
                  className="required email shadow-custom form-control border-0"
                  id="mce-EMAIL"
                ></input>
              </div>
            </div>
            <div id="mce-responses" className="clear" hidden>
              <div className="response" id="mce-error-response" hidden></div>
              <div className="response" id="mce-success-response" hidden></div>
            </div>
            <div style={mailchimp} aria-hidden="true" hidden>
              <input
                type="text"
                name="b_c043d73acfb9d61f492748d7b_5ce2d05829"
              ></input>
            </div>
            <div className="col-md-5 my-3">
              <input
                type="submit"
                target="_blank"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="btn btn-danger shadow-custom-danger w-100"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default MailchimpForm;