import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footer-styles";
  
const Footer = () => {
  return (
    <React.Fragment>
    <Box>
      <h1 style={{ color: "#d0d6e2", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        International Conference on Application Frameworks
      </h1>
      <br />
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>History</Heading>
            <FooterLink href="#">ICAF 2020</FooterLink>
            <FooterLink href="#">ICAF 2019</FooterLink>
            <FooterLink href="#">ICAF 2018</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">SLIIT Malabe</FooterLink>
            <FooterLink href="#">SLIIT Metro</FooterLink>
            <FooterLink href="#">SLIIT Kandy</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Container>
      <span style={{position: "absolute", width: "50%", textAlign: "center", color: "#d0d6e2", bottom: "0px"}}>&copy; {new Date().getFullYear()} Copyright: <a style={{color: "#b1bace"}}href="#"> ICAF.com </a></span>
      </Container>
    </Box>
    </React.Fragment>
  );
};
export default Footer;