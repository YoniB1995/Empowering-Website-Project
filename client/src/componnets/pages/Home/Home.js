import React from "react";
import "./Home.css";
import GoalsCards from "./Goals/GoalsCards";
import WorkersCards from "../../features/workersCards/WorkersCards";
import ImageSlider from "../../features/Slider/ImageSlider";
import "./Home.css";
import "animate.css";
import Vision from "./vision/Vision";
import "animate.css";
import SliderStore from "../../features/Slider/SliderStore";
import { useEffect } from "react";
import WOW from "wowjs";
import { BackTop } from "antd";
import Plan from "../../features/Plan/Plan";
const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div>
      <div className="home-first-section">
        <ImageSlider />
        <div className="about-us wow animate__bounceInUp">
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
          <p>
            <br /> העצמה נשית אתיופית, עידוד ייעוץ ומילגות להשכלה גבוהה לנשים,
            הכשרות וקורסים, מינוף ועידוד פתיחת עסקים לנשים בקהילה,
            <br />
          </p>
          <p>
            <br /> העצמה נשית אתיופית, עידוד ייעוץ ומילגות להשכלה גבוהה לנשים,
            הכשרות וקורסים, מינוף ועידוד פתיחת עסקים לנשים בקהילה,
            <br />
          </p>
          <p>
            <br /> העצמה נשית אתיופית, עידוד ייעוץ ומילגות להשכלה גבוהה לנשים,
            הכשרות וקורסים, מינוף ועידוד פתיחת עסקים לנשים בקהילה,
            <br />
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
        <WorkersCards />
      </div>
      <Vision />
      <GoalsCards />
      {/* <Copartner/> */}
      <SliderStore />
      {/* <Store/> */}
      <BackTop>
        <div className="upBtn">BACK TO UP</div>
      </BackTop>
    </div>
  );
};

export default Home;
