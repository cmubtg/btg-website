import React from "react";
import Row from "react-bootstrap/Row";
import TeamPhoto from "./TeamPhoto";
import DavidPhoto from "../images/team/david.jpg";
import ChloePhoto from "../images/team/chloe.jpg";
import MeghanaPhoto from "../images/team/meghana.jpg";
import RaymondPhoto from "../images/team/raymond.jpg";
import RoshanPhoto from "../images/team/roshan.jpg";
import RachanaPhoto from "../images/team/rachana.jpg";


function TeamSummary() {
  return (
    <React.Fragment>
      <Row id="people">
      <TeamPhoto
          memberName="David You"
          role="President"
          imageUrl={DavidPhoto}
          description={"BS, Business Administration, 2023, President."}
          profile="https://www.linkedin.com/in/david-s-you/"
        ></TeamPhoto>     
      <TeamPhoto
          memberName="Chloe Kim"
          role="Head of Finance"
          imageUrl={ChloePhoto}
          description={"BS, Business Administration, 2023, Head of Finance."}
          profile="https://www.linkedin.com/in/chloe-kim-2023/"
        ></TeamPhoto> 
      <TeamPhoto
          memberName="Meghana Tera"
          role="Head of Design"
          imageUrl={MeghanaPhoto}
          description={"BS, Information Systems, 2024, Head of Design."}
          profile="https://www.linkedin.com/in/meghana-tera/"
        ></TeamPhoto> 
      <TeamPhoto
          memberName="Raymond Li"
          role="Head of Operations"
          imageUrl={RaymondPhoto}
          description={"BS, Information Systems, 2022, Head of Operations."}
          profile="https://www.linkedin.com/in/raymond-li-983708174/"
        ></TeamPhoto>                           
      </Row>

      <Row>
      <TeamPhoto
          memberName="Roshan Ram"
          role="Head of Tech"
          imageUrl={RoshanPhoto}
          description={"BS, Information Systems, 2023, Head of Tech."}
          profile="https://www.linkedin.com/in/roshanr11/"
        ></TeamPhoto> 
      <TeamPhoto
          memberName="Rachana Murali Narayanan"
          role="Head of Outreach"
          imageUrl={RachanaPhoto}
          description={"BS, Electrical Engineering and Statistics, 2023, Head of Outreach."}
          profile="https://www.linkedin.com/in/rachana-m-n/"
        ></TeamPhoto> 
      </Row>
    </React.Fragment>
  );
}

export default TeamSummary;
