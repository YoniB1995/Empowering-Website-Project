import React from "react";
import "../Slider/slider.css"
import ImgSliderData from "./imgSliderData";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const ImageSlider = () => {
  return (
    <Carousel autoplay className="slider-container">
      {ImgSliderData.map((slide) => (
        <div>
          <img src={slide.image} id="img-slide" />
        </div>
      ))}
    </Carousel>
  );
};
export default ImageSlider;
