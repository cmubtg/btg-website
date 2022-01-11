import React from "react";
import Row from "react-bootstrap/Row";
import Company from "./Company";
import Bofa from "../images/companies/bofa.svg";
import CapitalOne from "../images/companies/capitalone.svg";
import Deutsche from "../images/companies/deutsche.svg";
import Mastercard from "../images/companies/mastercard.svg";
import Microsoft from "../images/companies/microsoft.svg";
import Spotify from "../images/companies/spotify.svg";
import Roblox from "../images/companies/roblox.svg";
import YC from "../images/companies/yc.svg";
import PayPal from "../images/companies/paypal.svg";
import Deloitte from "../images/companies/deloitte.svg";
import IBM from "../images/companies/ibm.svg";
import Publicis from "../images/companies/publicis.svg";
import PWC from "../images/companies/pwc.svg";
import Amazon from "../images/companies/amazon.svg";
import Google from "../images/companies/google.svg";
import Meta from "../images/companies/meta.svg";
import "../css/companies.css"

const Companies = () => {
  return (
    <>
      <Row>
        <Company name="google" company={Google}></Company>    
        <Company name="microsoft" company={Microsoft}></Company>  
        <Company name="meta" company={Meta}></Company>  
        <Company name="amazon" company={Amazon}></Company>        
      </Row>
      <Row>
        <Company name="spotify" company={Spotify}></Company>      
        <Company name="roblox" company={Roblox}></Company>  
        <Company name="paypal" company={PayPal}></Company>
        <Company name="ibm" company={IBM}></Company>
      </Row>
      <Row>
        <Company name="mastercard" company={Mastercard}></Company>        
        <Company name="deutsche" company={Deutsche}></Company>
        <Company name="bofa" company={Bofa}></Company>
        <Company name="capitalone" company={CapitalOne}></Company>                
      </Row>
      <Row>
        <Company name="publicis" company={Publicis}></Company>
        <Company name="deloitte" company={Deloitte}></Company>
        <Company name="pwc" company={PWC}></Company>                
        <Company name="yc" company={YC}></Company>
      </Row>
    </>
  );
};

export default Companies;
