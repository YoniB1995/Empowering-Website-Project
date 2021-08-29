import React from "react";
<<<<<<< HEAD
import "./Home.css";
import Button from "../../features/Button/Button";
import GoalsCards from "./Goals/GoalsCards";
import Copartners from "./Copartners/Copartners";

const Home = () => {
    return (
        <div>
        </div>
    )
}
export default Home;
=======
import ImageSlider from "../../features/Slider/ImageSlider";
import Card from "../../features/card/Card";
import WorkersCards from "../../features/workersCards/WorkersCards";
import Footer from "../../features/Footer/Footer";
import "./Home.css";
import "animate.css";
import Button from "../../features/Button/Button";
import Vision from "./vision/Vision";
import { FaArrowDown } from "react-icons/fa";

import "animate.css";
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
        <h3>הצוות שלנו </h3>
        {/* <WorkersCards /> */}
      </div>
      <Vision />

      {/* <div className="hazon">
        <img
          src="./eye.png"
          style={{
            width: "150px",
            position: "absolute",
            top: "-80px",
            left: "auto",
            right: "auto",
          }}
        />
        z<h1> החזון שלנו</h1>
        <h3 style={{ lineHeight: "1.8" }}>
          הקבוצה הוקמה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיות החזקות,
          האצילות והמוצלחות(למרות שלפעמים איננו מעריכות מספיק את עצמנו) ויש
          בידינו הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את השנייה
          ולהצליח יחד. האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכת שבא) יכולה
          לסייע בהעלאת נושאים חברתיים ואישיים הקשורים לעדה ובעיקר יכולה להביא
          למינוף והצלחה של כל אחת ואחת.
        </h3>
        {/* <hr /> */}
      {/* <Button
          type="button"
          text="לקרוא עוד"
          className="myButton"
          class="animate__animated animate__fadeIn"
        />
      </div> */}
    </div>
  );
};

export default Home;
>>>>>>> 729ffe675b0a32eb8816822f43b17e16f7dbf71c
