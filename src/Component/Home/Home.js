import React from "react";
import wallper from "../../Images/wallper.webp";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-5">
      <Carousel id="hCarousel">
        <Carousel.Item>
          <img
            className="responsive"
            style={{ width: "100%", height: "670px", opacity: "40%" }}
            src={wallper}
            alt=""
          />
          <Carousel.Caption className="d-flex  h-75 align-items-top justify-content-center">
            <b>
              <h1 className="display-3">
                <b>Welcome to CRYPTO ANALISYS</b>
              </h1>
              <h5>Our experienced team will help you to gain your profits</h5>
              <h1 className="pb-5"> </h1>
              <Link
                className="btn btn-outline-success  btn-rounded border-3 rounded-pill ps-5 pe-5 text-white"
                to={"/memberships"}
              >
                <b>Get Started</b>
              </Link>
            </b>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
