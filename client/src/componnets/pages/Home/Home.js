import React from "react";
import ImageSlider from "../../features/Slider/ImageSlider";
import Vision from "./vision/Vision";
import "animate.css";
import SliderStore from "../../features/Slider/SliderStore";
import { useEffect } from "react";
import WOW from "wowjs";
import { BackTop } from "antd";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./Home.css";
import Goals from "./goals/Goals";
import Programs from "./programs/Programs";
import Copartner from "./Copartners/Copartners";

const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div>
      <div className="home-about-us-section">
        <div>
          <ImageSlider />
        </div>
        <div className="about-us-home wow animate__bounceInUp">
          <h1>קצת עלינו </h1>
          <p> עצמה נשית אתיופית, עידוד, ייעוץ ומילגות להשכלה גבוהה לנשיםv</p>
          <p> הכשרות וקורסים, מינוף ועידוד פתיחת עסקים לנשים בקהילה</p>
          <p>
            ייעוץ לעצמאות כלכלית, טיפול בפניות הציבור נזקקים, נפגעי תקיפה מינית,
            נשים הסובלות
          </p>
          <p> עצמה נשית אתיופית, עידוד, ייעוץ ומילגות להשכלה גבוהה לנשיםv</p>
          <p> הכשרות וקורסים, מינוף ועידוד פתיחת עסקים לנשים בקהילה</p>
          <p>
            ייעוץ לעצמאות כלכלית, טיפול בפניות הציבור נזקקים, נפגעי תקיפה מינית,
            נשים הסובלות
          </p>
          <Button
            className="about-us-home-btn"
            size="large"
            shape="round"
            style={{
              background: "white",
              borderColor: "white",
              color: "black",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            לקרוא עוד
          </Button>
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

      {/* <div className="home-newsletter-section">
        <div className="archive-container">
          <div className="archive-slider"> */}
            <SliderStore />
            {/* <img src="./archive-newsletter-vector.jpg" /> */}
          {/* </div> */}
          <div className="newsletter-signup-btn">
            <div style={{display:"flex",justifyContent:"center",}}>
            <Button
              className="about-us-home-btn"
              size="large"
              shape="round"
              style={{
                background: "#f5ad88",
                borderColor: "#f5ad88",
                color: "white",
              }}
            >
              להרשמה לניוזלטר לחצ\י כאן
            </Button>
            </div>
          {/* </div>
        </div> */}
      </div> 
      <Programs/>
      <div
        className="vision-goals-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "1000px",

        }}
      >
        <div
          className="vision-container"
          style={{ width: "95%", display: "flex", justifyContent: "flex-end" }}
        >
          <Vision />
        </div>

        <div
          className="goals-container"
          style={{ width: "75%", display: "flex", justifyContent: "flex-end" }}
        >
          <Goals />
        </div>
        <div
          className="programs-wrapper"
          style={{
            width: "95%", display: "flex", justifyContent: "flex-end"
          }}
        >
        </div>
      </div>
      <Copartner/>

      <BackTop>
        <div className="upBtn">
          חזרה למעלה
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </div>
  );
};

export default Home;
