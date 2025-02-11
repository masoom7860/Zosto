import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CustomerEngagement = () => {
  const features = [
    {
      title: "User authentication & identity",
      description: "Fight fraud and keep customer accounts secure with user authentication and identity tools.",
      stats: "389M fraud attempts blocked, saving customers $45 million",
      button: "Verify users",
      image: "https://www.twilio.com/content/dam/twilio-com/global/en/homepage/product-focus/illo-use-case-twilio-flex.png/_jcr_content/renditions/compressed-original.webp ", // Replace with actual image URL
      buttonColor: "primary",
    },
    {
      title: "Voice APIs",
      description: "Build voice experiences that increase customer satisfaction and unlock ROI with data and AI.",
      stats: "50B+ voice minutes handled across the globe in 2023",
      button: "Improve calls",
      image: "https://www.twilio.com/content/dam/twilio-com/global/en/homepage/product-focus/illo-use-case-voice-apis.png/_jcr_content/renditions/compressed-original.webp",
      buttonColor: "primary",
    },
    {
      title: "Messaging platform",
      description: "Send, receive, and manage multichannel text messages on our globally reliable platform.",
      stats: "167B+ messages sent or received in 2023",
      button: "Send messages",
      image: "https://www.twilio.com/content/dam/twilio-com/global/en/homepage/product-focus/illo-use-case-authentication-and-identity.png/_jcr_content/renditions/compressed-original.webp",
      buttonColor: "primary",
    },
    {
      title: "Twilio Flex",
      description: "Deliver personalized support and sales interactions at scale with a Flex digital engagement center.",
      stats: "103M+ chat, SMS, and email messages handled in 2023",
      button: "Engage customers",
      image: "https://www.twilio.com/content/dam/twilio-com/global/en/homepage/product-focus/illo-use-case-messaging-platform.png/_jcr_content/renditions/compressed-original.webp",
      buttonColor: "primary",
    },
  ];

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center">
        <h1 className="fw-bold display-4">The complete toolbox for customer engagement</h1>
      </div>
      <Row className="mt-4">
        {features.map((feature, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card className="shadow-sm text-center border-0">
              <Card.Img variant="top" src={feature.image} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
                <p className="text-danger fw-bold">{feature.stats}</p>
                <Button variant={feature.buttonColor}>{feature.button}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerEngagement;
