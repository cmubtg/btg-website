import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FadeIn from "react-fade-in";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { Helmet } from "react-helmet";
import BTGCover from "../../images/btg-cover.png";
import Layout from "../../components/Layout"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        name: "",
        email: "",
        message: ""
      };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);      
  }

  handleNameChange(event) {
    this.setState({name: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value })
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
    alert("Thank you for your message! \nThis doesn't actually do anything since we don't have the email linked")
    event.preventDefault();
  }

  
  render() {
    
    return (
      <Layout>

        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">Contact</h1>
            </Col>
          </Row>
          
          <form onSubmit={this.handleSubmit}>
            <Row className="pt-1 mt-3 col-md-5">
              <input 
                class="form-control"
                type="text" 
                value={this.state.name} 
                onChange={this.handleNameChange} 
                placeholder="Name"
              />
            </Row>
            
            <Row className="pt-1 mt-3 col-md-5">
              <input 
                class="form-control"
                type="email" 
                value={this.state.email} 
                onChange={this.handleEmailChange} 
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </Row>

            <Row className="pt-1 mt-3 col-md-6">
              <textarea 
                class="form-control"
                rows="5"
                value={this.state.message} 
                onChange={this.handleMessageChange}       
                placeholder="Write your message here"          
              />              
            </Row>            

            <Row className="pt-4 mt-3 col-md-2">
              <button 
                type="submit" 
                value="Submit" 
                class="btn btn-danger" 
              >
                 Submit
              </button>
            </Row>      

            

          </form>          
        </Container>
          

        </Layout>
      
    );
  }
}

export default Contact