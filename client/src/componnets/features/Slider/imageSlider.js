import React from "react";
import { useState } from "react";
import { slides } from "./sliderData";
import "./slider.css";

const ImageSlider = ({}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 4000);

  return (
    <section className="slider">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} className="image" />}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
