import "./vision.css";
import "animate.css";
import { useEffect } from "react";
import WOW from "wowjs";
const Vision = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="vision-container">
      <div className="vision-header">
        <h1>החזון שלנו</h1>
      </div>
      <div className="vision-card">
        
        <div className="vision-card-content wow animate__bounceInLeft ">
          הקבוצה הוקמה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיות החזקות,
          <br />
          האצילות והמוצלחות למרות שלפעמים איננו מעריכות מספיק את עצמנו ויש
          בידינו
          <br /> הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את השנייה
          ולהצליח יחד. <br />
          האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכת שבא) <br />
          יכולה לסייע בהעלאת נושאים חברתיים ואישיים <br />
          הקשורים לעדה ובעיקר יכולה להביא למינוף והצלחה של כל אחת ואחת.
        </div>
        <div className="vision-card-img wow animate__bounceInRight">
          <img src="./logo-EEW.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
