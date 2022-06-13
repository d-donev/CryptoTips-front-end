import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../../Images/carusell-1.png";
import carousel2 from "../../../Images/carousell-2.png";

function ControlledCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            className="responsive"
            style={{ width: "100%", height: "400px" }}
            src={carousel1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            style={{ width: "100%", height: "400px" }}
            src={carousel2}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
