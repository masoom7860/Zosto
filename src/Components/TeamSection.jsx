    import { Container, Row, Col, Card } from "react-bootstrap";

const TeamSection = () => {
  const features = [
    {
      title: "Developers",
      description:
        "Build your use case quickly with our up-to-date documentation, tutorials, and quickstarts.",
      icon: "💻",
      link: "#",
    },
    {
      title: "Product Owners",
      description:
        "Create innovative customer experiences with reliable APIs and first-party data for personalization.",
      icon: "💡",
      link: "#",
    },
    {
      title: "Marketers",
      description:
        "Increase your engagement and ROI with multichannel marketing campaigns powered by your customer data.",
      icon: "📊",
      link: "#",
    },
    {
      title: "Sales and Support",
      description:
        "Talk to customers on the channel they prefer, using the full context of their profiles to personalize interactions.",
      icon: "🎧",
      link: "#",
    },
  ];

  const brands = [
    { name: "Toyota", logo: "🚗" },
    { name: "American Red Cross", logo: "⛑️" },
    { name: "IBM", logo: "💾" },
    { name: "Airbnb", logo: "🏡" },
  ];

  return (
    <Container expanded="lg" className="text-center my-5">
      {/* Section Title */}
      <h1 className="fw-bold mb-5 mt-5">Zosto works for your whole team</h1>

      {/* Features Grid */}
      <Row className="mt-4">
        {features.map((feature, index) => (
          <Col md={6} className="d-flex align-items-start mb-4" key={index}>
            <div className="me-3">
              <span
                style={{
                  fontSize: "2rem",
                  backgroundColor: "#ffe6e6",
                  borderRadius: "50%",
                  padding: "10px 15px",
                  display: "inline-block",
                }}
              >
                {feature.icon}
              </span>
            </div>
            <div>
              <h5>
                <a href={feature.link} className="text-primary fw-bold">
                  {feature.title}
                </a>
              </h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Brand Logos */}
      <p className="mt-5">Join the 300,000+ brands that use Twilio to connect with their customers</p>
      <Row className="justify-content-center">
        {brands.map((brand, index) => (
          <Col xs={6} md={3} key={index} className="text-center">
            <h3>{brand.logo}</h3>
            <p className="fw-bold">{brand.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamSection;
