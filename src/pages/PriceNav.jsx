import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { FaGlobe, FaSearch } from "react-icons/fa";
import SliderImage from "../Components/SliderImage";

const PricNav = () => {
  return (
    <>
    <Navbar expand="lg" bg="white" variant="light" className="shadow-sm px-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://www.twilio.com/marketing/bundles/company-brand/img/logos/red/twilio-logo-red.svg"
            alt="Twilio"
            height="30"
          />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="mx-auto d-none d-lg-flex">
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Solutions</Nav.Link>
          <Nav.Link href="#">Developers</Nav.Link>
          <Nav.Link href="#">Why Twilio</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-2">
          {/* Search Icon */}
          <FaSearch className="text-dark" />

          {/* Language Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="light" size="sm">
              <FaGlobe /> English
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">English</Dropdown.Item>
              <Dropdown.Item href="#">Spanish</Dropdown.Item>
              <Dropdown.Item href="#">French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Support Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="light" size="sm">Support</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Help Center</Dropdown.Item>
              <Dropdown.Item href="#">Contact Support</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Login */}
          <Nav.Link href="#">Login</Nav.Link>

          {/* Buttons */}
          <Button variant="outline-primary">Contact Sales</Button>
          <Button variant="primary">Start for Free</Button>
        </div>
      </Container>
    </Navbar>
    <SliderImage/>
    </>
  );
};

export default PricNav;
