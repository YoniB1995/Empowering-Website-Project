import React from "react";
import ImgSliderData from "./imgSliderData";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const ImgSlider = () => {
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
export default ImgSlider;
