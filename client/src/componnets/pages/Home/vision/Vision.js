import "./vision.css";
import "animate.css";
import { Button, Card } from "antd";
import { useEffect } from "react";
import WOW from "wowjs";
const Vision = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="wrapper">
      <div className="card">
        <div className="img-container">
          <img src="./vision-vector.jpg" alt="vision-vector" id="img-vision" />
        </div>
        <div className="card-body">
          <div className="header">
          <div className="header-decoration"></div>
          <h3 className="card-title">חזון</h3>
          </div>
          <div className="card-description">
            <div>
              הקמתי את הקבוצה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיות
              החזקות
           
              , האצילות והמוצלחות(למרות שלפעמים איננו מעריכות מספיק את עצמנו)
           
              ויש בידינו הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את
              השנייה ולהצליח יחד.
          
              האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכת שבא) יכולה לסייע בהעלאת
              נושאים חברתיים ואישיים הקשורים לעדה ובעיקר יכולה להביא למינוף
              והצלחה של כל אחת ואחת.
            </div>
            <Button
              className="about-us-home-btn"
              size="middle"
              shape="round"
              style={{
                background: "#f5ad88",
                borderColor: "#f5ad88",
                color: "white",
                width: "100px",
                marginTop:"20px"
              }}
            >
              קרא עוד
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
