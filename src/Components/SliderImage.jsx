import Slider from "react-slick";

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
                        <div>
                            <h3>1</h3>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderImage
