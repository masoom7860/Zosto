import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const footerData = [
  {
    title: "Products",
    items: [
      "Twilio Engage",
      "Flex",
      "User Authentication & Identify",
      "Lookup",
      "Verify",
      "Voice",
      "Video",
      "Messaging",
      "Beta products and features",
      "All products",
    ],
  },
  {
    title: "Solutions",
    items: [
      "Customer Data Platform",
      "SMS Marketing",
      "Commerce Communications",
      "Contact Center",
      "All solutions",
    ],
  },
  {
    title: "Docs",
    items: [
      "Communications",
      "Customer Data",
      "Engagement Applications",
      "Twilio Essentials",
      "Helper Libraries",
      "Developer Resources",
      "All Docs",
    ],
  },
  {
    title: "Company",
    items: [
      "About Twilio",
      "Why Twilio",
      "Customer Engagement Platform",
      "Trusted Communications",
      "Customers",
      "Get Help",
      "Contact Sales",
      "Press & Media",
      "Public Policy",
      "Investor Relations",
      "Events",
      "Jobs at Twilio",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <h1 className="mb-5 fw-normal">We can't wait to see what you build.</h1>
        <Row>
          {footerData.map((section, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-3 text-start">
              <h5 className="text-uppercase fw-bold mb-3">{section.title}</h5>
              <ul className="list-unstyled text-secondary small">
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <a href="#" className="text-secondary text-decoration-none footer-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <hr className="border-light" />
        <Row className="text-center">
          <Col>
            <p>Copyright &copy; 2025 Twilio Inc. All Rights Reserved.</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light"><FaFacebook size={24} /></a>
              <a href="#" className="text-light"><FaTwitter size={24} /></a>
              <a href="#" className="text-light"><FaLinkedin size={24} /></a>
              <a href="#" className="text-light"><FaGithub size={24} /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .footer-link {
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: white !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
