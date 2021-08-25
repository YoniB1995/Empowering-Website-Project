import React from "react";
import ImageSlider from "../../features/Slider/ImageSlider";
import Card from "../../features/card/Card";
import WorkersCards from "../../features/workersCards/WorkersCards";
import Footer from "../../features/Footer/Footer";
import "./Home.css";
import "animate.css";
import Button from "../../features/Button/Button";
import "animate.css";
const Home = () => {
  return (
    <div animate__fadeIn>
      <ImageSlider />
      <Card />
      <WorkersCards />
      {/* <hr /> */}
      <div className="hazon">
        <img src="./eye.png" style={{ width: "50px",position:"absolute" }} />

        <h1> החזון שלנו</h1>
        <h3 style={{ lineHeight: "1.8" }}>
          הקבוצה הוקמה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיות החזקות,
          האצילות והמוצלחות(למרות שלפעמים איננו מעריכות מספיק את עצמנו) ויש
          בידינו הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את השנייה
          ולהצליח יחד. האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכת שבא) יכולה
          לסייע בהעלאת נושאים חברתיים ואישיים הקשורים לעדה ובעיקר יכולה להביא
          למינוף והצלחה של כל אחת ואחת.
        </h3>
        {/* <hr /> */}
        <Button
          type="button"
          text="לקרוא עוד"
          className="myButton"
          class="animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};

export default Home;
