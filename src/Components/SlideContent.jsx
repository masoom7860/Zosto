import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const sections = [
  {
    title: "Finally, personalized engagement made easy",
    description:
      "Drive better ROI from every customer conversation. Twilio’s all-in-one platform combines powerful channel APIs with AI and data, so you can serve every customer uniquely.",
    buttons: [
      { text: "Start for free", variant: "primary" },
      { text: "See what's possible", variant: "link" },
    ],
    image: "https://via.placeholder.com/300", // Replace with actual image
    chatMessage: "Hello, Angela. We can help you pay your bill. Would you like to use the payment method on record?",
  },
];

const LandingPage = () => {
  return (
    <div className="bg-dark text-light py-5 d-flex flex-column align-items-center">
      {sections.map((section, index) => (
        <div key={index} className="text-center p-4 w-75">
          <h1 className="fw-bold">{section.title}</h1>
          <p>{section.description}</p>
          <div>
            {section.buttons.map((btn, i) => (
              <Button key={i} variant={btn.variant} className="me-2">
                {btn.text}
              </Button>
            ))}
          </div>
          <p className="mt-2 small">Free trial | No credit card required | Pay-as-you-go pricing</p>
          <div className="position-relative d-inline-block mt-3">
            <img
              src={section.image}
              alt="Person on call"
              className="img-fluid rounded-circle"
            />
            <Card className="position-absolute bottom-0 start-50 translate-middle-x p-2 bg-light text-dark shadow">
              <Card.Body>
                <span role="img" aria-label="chat-icon">🤖</span>
                {section.chatMessage}
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;