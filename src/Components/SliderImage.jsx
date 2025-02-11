import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <button className="btn btn-primary">Next</button>,
        prevArrow: <button className="btn btn-secondary">Prev</button>,
      };

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Slider className="w-75 mx-auto" {...settings}>
        <div>
          <img
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 1"
            className="img-fluid rounded"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 2"
            className="img-fluid rounded"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 3"
            className="img-fluid rounded"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 4"
            className="img-fluid rounded"
          />
        </div>
      </Slider>
    </Container>
  );
}
