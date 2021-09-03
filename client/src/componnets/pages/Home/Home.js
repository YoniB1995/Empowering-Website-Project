import React from "react";
import "./Home.css";
import Button from "../../features/Button/Button";
import GoalsCards from "./Goals/GoalsCards";
import Copartners from "./Copartners/Copartners";
import Card from "../../features/card/Card";
import WorkersCards from "../../features/workersCards/WorkersCards";
import Footer from "../../features/Footer/Footer";
import ImageSlider from '../../features/Slider/ImageSlider'
import "./Home.css";
import "animate.css";
import Vision from "./vision/Vision";
import { FaArrowDown } from "react-icons/fa";
import "animate.css";
import Copartner from "./Copartners/Copartners";
import SliderStore from "../../features/Slider/SliderStore";
const Home = () => {
  return (
    <div>
      <div className="home-first-section">
        <ImageSlider />
        <div className="about-us">
          <h1>קצת עלינו </h1>
          <p>
            <br /> העצמה נשית אתיופית, עידוד ייעוץ ומילגות להשכלה גבוהה לנשים,
            הכשרות וקורסים, מינוף ועידוד פתיחת עסקים לנשים בקהילה,
            <br />
          </p>
          <p>
            {" "}
            ייעוץ לעצמאות כלכלית, טיפול בפניות הציבור נזקקים, נפגעי תקיפה מינית,
            <br /> נשים הסובלות מאלימות
          </p>
        </div>
      </div>
      <div className="buffer-div">
        <div className="arrow-icon-container">
          <i
            class="fas fa-arrow-down"
            style={{ fontSize: "50px", color: "white" }}
          ></i>
        </div>
      </div>
      <div className="home-second-section">
        <WorkersCards/>
      </div>
      <Vision />
      <GoalsCards />
      {/* <Copartner/> */}
      <SliderStore />
    </div>
  );
};

export default Home;
