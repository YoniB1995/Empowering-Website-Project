import React from "react";
import "../Slider/slider.css";
import ImgSliderData from "./imgSliderData";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const ImageSlider = () => {
  return (
    <div className="slider-img-section" style={{ paddingTop: "20px" }}>
      <div className="slider-container">
        <div className="container-frame-cube"></div>
        <Carousel autoplay>
          {ImgSliderData.map((slide) => (
            <div>
              <img src={slide.image} id="img-slide" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ImageSlider;
