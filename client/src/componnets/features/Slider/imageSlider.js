import "./slider.css";
import React, { useState } from "react";
import imgSliderData from "./imgSliderData";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = imgSliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current)
  };
  const moveDot = (imgIndex) => {
    setCurrent(imgIndex);
    
  };
  return (
    <div className="container">
      <div className="image-container">
        {imgSliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide-active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} />}
            </div>
          );
        })}
      </div>

      <button id="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button id="next" onClick={nextSlide}>
        &gt;
      </button>
      <div className="dot-container">
        {Array.from({ length: length }).map((item, index) => (
          <button onClick={() => moveDot(index)} className={index===current?"dot-active":"dot"} ></button>
        ))}
      </div>
    </div>
  );
};


export default ImageSlider;
