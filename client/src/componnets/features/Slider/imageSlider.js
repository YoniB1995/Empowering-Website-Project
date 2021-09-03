import React from "react";
import ImgSliderData from "./imgSliderData";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "../Slider/slider.css";


const ImageSlider = () => {
  return (
    <div className="slider-img-section" style={{ paddingTop: "20px" }}>
      <div className="slider-container">
        <div className="container-frame-cube"></div>
        <Carousel autoplay>
          {ImgSliderData.map((slide) => (
            <img src={slide.image} id="img-slide" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ImageSlider;
