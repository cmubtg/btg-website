import React from "react";
import Row from "react-bootstrap/Row";
import TeamMember from "./TeamMember";
import DavidPhoto from "../images/team/david.jpg";
import ChloePhoto from "../images/team/chloe.jpg";
import MeghanaPhoto from "../images/team/meghana.jpg";
import RaymondPhoto from "../images/team/raymond.jpg";


function TeamSummary() {
  return (
    <React.Fragment>
      <Row id="people">
      <TeamMember
          memberName="David You"
          role="President"
          imageUrl={DavidPhoto}
          description={"BS, Business Administration, 2023, President."}
          profile="https://www.linkedin.com/in/david-s-you/"
        ></TeamMember>     
      <TeamMember
          memberName="Chloe Kim"
          role="Head of Finance"
          imageUrl={ChloePhoto}
          description={"BS, Business Administration, 2023, Head of Finance."}
          profile="https://www.linkedin.com/in/chloe-kim-2023/"
        ></TeamMember> 
      <TeamMember
          memberName="Meghana Tera"
          role="Head of Design"
          imageUrl={MeghanaPhoto}
          description={"BS, Information Systems, 2024, Head of Design."}
          profile="https://www.linkedin.com/in/meghana-tera/"
        ></TeamMember> 
      <TeamMember
          memberName="Raymond Li"
          role="Head of Operations"
          imageUrl={RaymondPhoto}
          description={"BS, Information Systems, 2022, Head of Operations."}
          profile="https://www.linkedin.com/in/raymond-li-983708174/"
        ></TeamMember>                           
      </Row>
    </React.Fragment>
  );
}

export default TeamSummary;
