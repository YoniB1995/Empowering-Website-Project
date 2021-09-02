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
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src="https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id="img-slide" alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ImageSlider;
