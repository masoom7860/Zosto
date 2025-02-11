import Slider from "react-slick";
import img1 from '../Assets/img1.jpg'
import Button from 'react-bootstrap/Button';



function SliderImage() {
    var Sliders = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Slider {...Sliders}>
                        <div className="d-flex justify-contnt-around">

                            <img src={img1} alt="" className="w-100" />
                            <h1>Finally, personalized engagement made easy</h1>
                            <p>Establish trust and capture attention with RCS from Twilio Messaging, without additional APIs to integrate and configure.</p>
                            <Button variant="primary">Start For Free</Button>
                            <a href="#" style={{color:'back'}}>see what's possible</a>
                            <p>Free trial  |  No credit card required  |  Pay-as-you-go pricing</p>
                        </div>
                        <div>
                            <img src={img1} alt="" className="w-100" />

                        </div>
                        <div>
                            <img src={img1} alt="" className="w-100" />

                        </div>
                        <div>
                            <img src={img1} alt="" className="w-100" />

                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderImage
