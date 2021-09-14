import React from "react";
import { Carousel } from "antd";
import ImgSliderData from "./imgSliderData";
import "antd/dist/antd.css";
import "../Slider/slider.css";

const ImageSlider = () => {
  return (
    <div className="slider-img-section" style={{ paddingTop: "20px" }}>
      <div className="slider-container">
        <div className="container-frame-cube"></div>
        <Carousel autoplay>
          {ImgSliderData.map((slide) => (
            <div>
                    <img src={slide.image} id="img-slide" alt="carousel-img" />

            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ImageSlider;
