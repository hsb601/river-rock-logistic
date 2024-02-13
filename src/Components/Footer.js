import React from "react";
import Logo from "../Assets/RR Logistics-02.webp";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterAddress,
  FooterSocialIcons,
} from "./Footerstyle";

const Footer = () => {
  return (
    <Box>
            <FooterContainer>
        <Row>
          <Column>
            <div className="footer-section-one">
              <div className="footer-logo-container">
                <img src={Logo} alt="" />
              </div>
              <Heading>Follow Us</Heading>
              <FooterSocialIcons>
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
              </FooterSocialIcons>
            </div>
          </Column>
          <Column>
            <Heading>Our Services</Heading>
            <FooterLink href="#">
              Ocean Container Shipping Rates from USA
            </FooterLink>
            <FooterLink href="#">Air Freight</FooterLink>
            <FooterLink href="#">Ground Transportation</FooterLink>
            <FooterLink href="#">Warehousing & Distribution</FooterLink>
            <FooterLink href="#">Customs Clearance</FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Our Story</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Premium Club</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Legal</Heading>
            <FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Shipping Policy</FooterLink>
            <FooterLink href="#">Returns Policy</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterAddress>
              <p>info@riverrocklogistics.com</p>
              <p>1320 Main St.</p>
              <p>STE 300-#9001</p>
              <p>Columbia, SC 29201</p>
              <p>Tel: 1-803-884-5729</p>
            </FooterAddress>
          </Column>

         
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
